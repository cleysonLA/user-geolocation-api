import mongoose, { Document, Schema } from 'mongoose';

type User = Document & {};

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<User>('User', UserSchema);
