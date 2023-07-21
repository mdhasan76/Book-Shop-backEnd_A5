"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const bookRoute = express_1.default.Router();
bookRoute.post("/create-book", book_controller_1.BookController.createBook);
bookRoute.get("/", book_controller_1.BookController.getBooks);
bookRoute.get("/:id", book_controller_1.BookController.getSingleBook);
bookRoute.delete("/:id", book_controller_1.BookController.deleteBook);
bookRoute.patch("/:id", book_controller_1.BookController.updateBook);
exports.default = bookRoute;
