import { body } from 'express-validator';

export const replenishmentValidation = [
  body('fullname', 'Укажите название товара').isLength({ min: 3 }),
  body('weight', 'Нужно указать вес товара').notEmpty(),
  body('productId', 'Нужен ID пополняемого товара').notEmpty(),
];
