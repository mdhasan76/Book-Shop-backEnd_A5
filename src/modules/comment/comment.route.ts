import express from "express";
import { createComment, getCommentByProductId } from "./comment.controller";

const commentRoute = express.Router();

commentRoute.post("/", createComment);
commentRoute.get("/:id/product", getCommentByProductId);

export default commentRoute;
