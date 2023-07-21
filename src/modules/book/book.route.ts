import express from "express";
import { BookController } from "./book.controller";

const bookRoute = express.Router();

bookRoute.post("/create-book", BookController.createBook);
bookRoute.get("/", BookController.getBooks);
bookRoute.get("/:id", BookController.getSingleBook);
bookRoute.delete("/:id", BookController.deleteBook);
bookRoute.patch("/:id", BookController.updateBook);

export default bookRoute;
