import mongoose from 'mongoose';

const RemainingSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('Remaining', RemainingSchema);
