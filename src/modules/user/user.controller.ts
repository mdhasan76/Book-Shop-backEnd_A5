import { RequestHandler, Response, Request } from "express";
import { UserService } from "./user.service";

const createUser: RequestHandler = async (req, res) => {
  const data = req.body;
  const result = await UserService.createUser(data);
  res.send({ data: result });
};

const login: RequestHandler = async (req, res) => {
  const data = req.body;
  const result = await UserService.login(data);
  res.send({ data: result });
};

export const UserController = { createUser, login };
