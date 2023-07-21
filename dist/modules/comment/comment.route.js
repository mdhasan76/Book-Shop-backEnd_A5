"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comment_controller_1 = require("./comment.controller");
const commentRoute = express_1.default.Router();
commentRoute.post("/", comment_controller_1.createComment);
commentRoute.get("/:id/product", comment_controller_1.getCommentByProductId);
exports.default = commentRoute;
