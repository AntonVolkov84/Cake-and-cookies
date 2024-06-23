import mongoose from 'mongoose';

const ReplenishmentSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    productId: {
      type: Number,
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
export default mongoose.model('Replenishment', ReplenishmentSchema);
