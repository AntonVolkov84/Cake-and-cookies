import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';

import { registerValidation } from './validations/auth.js';

import UserModel from './models/User.js';

mongoose
  .connect(
    'mongodb+srv://antvolkov84:j0Pal1thWa5XtHwS@cluster0.1t50rt5.mongodb.net/check?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('MongoDB OK!'))
  .catch((error) => console.log(error));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});
app.post('/auth/login', (req, res) => {
  const token = jwt.sign(
    {
      email: req.body.email,
      fullname: 'Vasya Pupkin',
    },
    'secret12345'
  );

  res.json({
    success: true,
    token,
  });
});

app.post('/auth/register', registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(8);
    const hash = await bcrypt.hash(password, salt);
    const doc = new UserModel({
      email: req.body.email,
      fullname: req.body.fullname,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret12345',
      {
        expiresIn: '30d',
      }
    );
    const { passwordHash, ...userData } = user._doc;
    res.json({ ...userData, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось зарегистрироваться!',
    });
  }
});

app.listen(3333, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log('Server OK!');
});
