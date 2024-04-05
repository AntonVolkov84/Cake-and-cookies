import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://antvolkov84:j0Pal1thWa5XtHwS@cluster0.1t50rt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
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

app.post('/auth/register', (req, res) => {});

app.listen(3333, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log('Server OK!');
});
