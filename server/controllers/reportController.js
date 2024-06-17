import reportModel from '../models/report.js';

export const addReport = async (req, res) => {
  try {
    const doc = new reportModel({
      idReport: req.body.idReport,
      fullname: req.body.fullname,
      price: req.body.price,
      weight: req.body.weight,
      totalPerProduct: req.body.totalPerProduct,
      total: req.body.total,
      dateCreated: req.body.dateCreated,
    });

    const report = await doc.save();
    res.json({ message: `Отчет создан`, report });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось создать отчет',
    });
  }
};

export const getAllReport = async (req, res) => {
  try {
    const reports = await reportModel.find();
    res.json(reports);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Ошибка при выводе информации о отчете',
    });
  }
};
