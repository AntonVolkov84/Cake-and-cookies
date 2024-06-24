import { validationResult } from 'express-validator';
import WriteoffModel from '../models/Writeoff.js';

export const addWriteoff = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const doc = new WriteoffModel({
      fullname: req.body.fullname,
      productId: req.body.productId,
      weight: req.body.weight,
    });
    const writeoff = await doc.save();
    res.json({
      message: `Списана часть товара: ${writeoff.fullname}.`,
      writeoff,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось оприходовать товар',
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const writeoff = await WriteoffModel.find();
    res.json(writeoff);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Ошибка при выводе информации о списании товаров',
    });
  }
};
