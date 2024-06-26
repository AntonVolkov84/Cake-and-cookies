import { validationResult } from 'express-validator';
import RemainingModel from '../models/Remaining.js';

export const addRemaining = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const doc = new RemainingModel({
      fullname: req.body.fullname,
      weight: req.body.weight,
      productId: req.body.productId,
    });

    const remaining = await doc.save();
    res.json({
      message: `Продукт ${remaining.fullname} занесен в остатки`,
      remaining,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось создать продукт',
    });
  }
};
export const remove = async (req, res) => {
  try {
    const productId = req.body.productId;
    const doc = await RemainingModel.findOneAndDelete({
      productId: productId,
    });
    if (!doc) {
      console.log(error);
      return res.status(500).json({
        message: 'Не удалось удалить продукт из списка остатков',
      });
    }
    res.json({
      message: `Продукт удален из остатков`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Ошибка при удалении продукта из остатков',
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const remaining = await RemainingModel.find();
    res.json(remaining);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Ошибка при выводе информации о остатках продуктов',
    });
  }
};
export const update = async (req, res) => {
  try {
    const productId = req.body.productId;
    await RemainingModel.updateOne(
      {
        productId: productId,
      },
      {
        fullname: req.body.fullname,
        productId: productId,
        weight: req.body.weight,
      }
    );
    res.json({
      message: 'Остаток продукта изменен',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось изменить остатки продукта',
    });
  }
};
