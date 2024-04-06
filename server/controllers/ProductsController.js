import { validationResult } from 'express-validator';
import ProductsModel from '../models/Products.js';

export const addProduct = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const doc = new ProductsModel({
      fullname: req.body.fullname,
      productUrl: req.body.productUrl,
      price: req.body.price,
      ingredients: req.body.ingredients,
    });

    const product = await doc.save();
    res.json({ message: `Продукт ${product.fullname} создан`, product });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось создать продукт',
    });
  }
};
