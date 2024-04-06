import { body } from 'express-validator';

export const productValidation = [
  body('fullname', 'Укажите название товара').isLength({ min: 3 }),
  body('productUrl', 'Неверная ссылка на аву товара').optional().isURL(),
  body('price', 'Нужно указать цену на товар').notEmpty(),
  body('ingredients', 'Нужно указать из чего произведен товар').notEmpty(),
];
