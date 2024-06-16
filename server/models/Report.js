import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema(
  {
    idReport: {
      type: Number,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    totalPerProduct: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('Report', ReportSchema);
