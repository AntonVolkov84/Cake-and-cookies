import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';

import { registerValidation, loginValidation } from './validations/auth.js';
import { productValidation } from './validations/products.js';
import { reportValidation } from './validations/reportValidation.js';
import { writeoffValidation } from './validations/writeoffValidation.js';
import { replenishmentValidation } from './validations/replenishmentValidation.js';

import * as UserController from './controllers/UserController.js';
import * as ProductsController from './controllers/ProductsController.js';
import * as reportController from './controllers/reportController.js';
import * as ReplenishmentController from './controllers/ReplenishmentController.js';
import * as WriteoffController from './controllers/WriteoffController.js';
import handleValidationErrors from './utils/handleValidationErrors.js';

import checkAuth from './utils/checkAuth.js';

mongoose
  .connect(
    'mongodb+srv://antvolkov84:j0Pal1thWa5XtHwS@cluster0.1t50rt5.mongodb.net/check?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('MongoDB OK!'))
  .catch((error) => console.log(error));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('Hello world');
});
// Отчет
app.post('/report', checkAuth, reportValidation, reportController.addReport);
app.get('/report', checkAuth, reportController.getAllReport);
// Пополнение товаров
app.post(
  '/replenishment',
  checkAuth,
  replenishmentValidation,
  ReplenishmentController.addReplenishment
);
app.get('/replenishment', checkAuth, ReplenishmentController.getAll);

// Списание товаров
app.post(
  '/writeoff',
  checkAuth,
  writeoffValidation,
  WriteoffController.addWriteoff
);
app.get('/writeoff', checkAuth, WriteoffController.getAll);

// Вывод товаров
app.get('/products', ProductsController.getAll);
app.get('/products/:id', ProductsController.getOne);
app.post(
  '/products',
  productValidation,
  handleValidationErrors,
  ProductsController.addProduct
);
app.delete('/products/:id', ProductsController.remove);
app.patch(
  '/products/:id',
  productValidation,
  handleValidationErrors,
  ProductsController.update
);

// Логин
app.post(
  '/auth/login',
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.get('/auth/me', checkAuth, UserController.authMe);
app.post(
  '/auth/register',
  registerValidation,
  handleValidationErrors,
  UserController.register
);

app.listen(3333, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log('Server OK!');
});
