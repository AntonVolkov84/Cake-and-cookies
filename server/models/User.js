import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    awatarUrl: String,
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('User', UserSchema);
