import { body } from 'express-validator';

export const writeoffValidation = [
  body('fullname', 'Укажите название товара').isLength({ min: 3 }),
  body('weight', 'Нужно указать вес товара').notEmpty(),
  body('productId', 'Нужен ID спеисываемого товара').notEmpty(),
  body('text', 'Нужно основание для списания товара')
    .notEmpty()
    .isLength({ min: 3 }),
];
