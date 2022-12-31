import mongoose, { model } from "mongoose";

export interface IBook {
  _id?: string;
  title: string;
  description: string;
  numPages: number;
}

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    numPages: { type: Number, required: true },
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id, delete ret.__v;
      },
    },
  }
);

export const Book = model<IBook>("Book", bookSchema);
