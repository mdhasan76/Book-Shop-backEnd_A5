import { RequestHandler } from "express";
import { BookService } from "./book.service";

const createBook: RequestHandler = async (req, res) => {
  const data = req.body;
  const result = await BookService.createBook(data);
  res.send({ data: result });
};

const getBooks: RequestHandler = async (req, res) => {
  const result = await BookService.getBooks();
  res.send({
    data: result,
  });
};

const getSingleBook: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const result = await BookService.getSingleBook(id);
  res.send({
    data: result,
  });
};

const updateBook: RequestHandler = async (req, res) => {
  const { id, ...data } = req.body;
  const result = await BookService.updateBook(id, data);
  res.send({ data: result });
};

const deleteBook: RequestHandler = async (req, res) => {
  const result = await BookService.deleteBook(req.params.id);
  res.send({ data: result });
};

export const BookController = {
  createBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
