import { IBook } from "./book.interface";
import { BookModel } from "./book.model";

const createBook = async (data: IBook): Promise<IBook> => {
  const book = await BookModel.create(data);
  await book.save();
  return book;
};

const updateBook = async (
  id: string,
  data: Partial<IBook>
): Promise<IBook | null> => {
  const book = await BookModel.findByIdAndUpdate(id, data, { new: true });
  return book;
};

const deleteBook = async (id: string): Promise<any> => {
  const book = await BookModel.deleteOne({ _id: id });
  return book;
};

const getBooks = async (): Promise<IBook[]> => {
  const books = await BookModel.find({});
  return books;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await BookModel.findOne({ _id: id });
  return result;
};

export const BookService = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  getSingleBook,
};
