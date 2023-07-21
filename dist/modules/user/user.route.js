"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const userRoute = express_1.default.Router();
userRoute.post("/", user_controller_1.UserController.createUser);
userRoute.get("/login", user_controller_1.UserController.login);
exports.default = userRoute;
