import { body } from 'express-validator';

export const reportValidation = [
  body('idReport', 'Нужен ID отчета').isLength({ min: 3 }),
  body('fullname', 'Укажите название товара').isLength({ min: 3 }),
  body('price', 'Нужно указать цену на товар').isLength({ min: 3 }).notEmpty(),
  body('weight', 'Нужно указать вес или количество').notEmpty(),
  body('totalPerProduct', 'Нужн стоимость по товару').notEmpty(),
  body('total', 'Нужна общая стоимость').isLength({ min: 3 }).notEmpty(),
];
