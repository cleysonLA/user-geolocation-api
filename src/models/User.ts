import mongoose, { Document, Schema } from 'mongoose';

type User = Document & {};

const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'Point',
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
  },
});

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
    geometry: GeoSchema,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<User>('User', UserSchema);
