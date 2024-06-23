import { validationResult } from 'express-validator';
import replenishmentModel from '../models/Replenishment.js';

export const addReplenishment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const doc = new replenishmentModel({
      fullname: req.body.fullname,
      productId: req.body.productId,
      weight: req.body.weight,
    });
    const replenishment = await doc.save();
    res.json({
      message: `Пополнился товар ${replenishment.fullname}.`,
      replenishment,
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
    const replenishment = await ReplenishmentModel.find();
    res.json(replenishment);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Ошибка при выводе информации о приходе товаров',
    });
  }
};
