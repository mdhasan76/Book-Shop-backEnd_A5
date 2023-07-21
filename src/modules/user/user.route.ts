import express from "express";
import { UserController } from "./user.controller";

const userRoute = express.Router();

userRoute.post("/", UserController.createUser);
userRoute.get("/login", UserController.login);

export default userRoute;
