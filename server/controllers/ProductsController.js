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
export const getOne = async (req, res) => {
  try {
    const productId = req.params.id;
    const doc = await ProductsModel.findById({
      _id: productId,
    });
    if (!doc) {
      return res.status(404).json({
        message: 'Продукт не найден',
      });
    }
    res.json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Ошибка при выводе информации о продуктe',
    });
  }
};
export const remove = async (req, res) => {
  try {
    const productId = req.params.id;
    const doc = await ProductsModel.findOneAndDelete({
      _id: productId,
    });
    if (!doc) {
      console.log(error);
      return res.status(500).json({
        message: 'Не удалось удалить продукт',
      });
    }
    res.json({
      message: `Продукт удален`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Ошибка при удалении продукта',
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const products = await ProductsModel.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Ошибка при выводе информации о продуктах',
    });
  }
};
export const update = async (req, res) => {
  try {
    const productId = req.params.id;
    await ProductsModel.updateOne(
      {
        _id: productId,
      },
      {
        fullname: req.body.fullname,
        productUrl: req.body.productUrl,
        price: req.body.price,
        ingredients: req.body.ingredients,
      }
    );
    res.json({
      message: 'Продукт изменен',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось изменить продукт',
    });
  }
};
