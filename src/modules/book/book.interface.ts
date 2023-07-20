import mongoose from "mongoose";

export interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

export interface IReview {
  bookId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  review: string;
}
