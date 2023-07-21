"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_model_1 = require("./book.model");
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.BookModel.create(data);
    yield book.save();
    return book;
});
const updateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.BookModel.findByIdAndUpdate(id, data, { new: true });
    return book;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.BookModel.deleteOne({ _id: id });
    return book;
});
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_model_1.BookModel.find({});
    return books;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.BookModel.findOne({ _id: id });
    return result;
});
exports.BookService = {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
    getSingleBook,
};
