import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (data: IUser) => {
  const user = await UserModel.create(data);
  await user.save();
  return user;
};

const login = async (data: { email: string; password: string }) => {
  const result = await UserModel.findOne({
    email: data.email,
    password: data.password,
  });
  return result;
};

export const UserService = { createUser, login };
