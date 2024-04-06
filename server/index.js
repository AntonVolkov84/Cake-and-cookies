import express from 'express';
import mongoose from 'mongoose';

import { registerValidation, loginValidation } from './validations/auth.js';
import { productValidation } from './validations/products.js';

import * as UserController from './controllers/UserController.js';
import * as ProductsController from './controllers/ProductsController.js';

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

// Вывод товаров

// app.get('/products', ProductsController.getAll
// );
// app.get('/products/:id', ProductsController.getOne
// );
app.post('/products', productValidation, ProductsController.addProduct);
// app.get('/products', ProductsController.remove);
// app.patch('/products/:id', ProductsController.update);


// Логин
app.post('/auth/login', loginValidation, UserController.login);

app.post('/auth/register', registerValidation, UserController.register);

app.listen(3333, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log('Server OK!');
});
