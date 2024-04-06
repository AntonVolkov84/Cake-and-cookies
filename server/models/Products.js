import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    productUrl: String,
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('Products', ProductsSchema);
