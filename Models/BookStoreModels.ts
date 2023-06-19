import mongoose from "mongoose";

interface Books {
  title: string;
  description: string;
  author: string;
  views: number[];
  coverImage: string;
  category: string;
}

interface iBooks extends Books, mongoose.Document {}

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  views: {
    type: [],
  },
  coverImage: {
    type: String,
  },
  category: {
    type: String,
  },
});

const BookModels = mongoose.model<iBooks>("Books", BookSchema);

export default BookModels;
