import { Request, RequestHandler, Response } from "express";
import { createCommentDB, getCommentByProductIdDB } from "./conmment.service";

export const createComment: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const result = await createCommentDB(req.body);

  res.send({
    data: result,
  });
};

export const getCommentByProductId: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const result = await getCommentByProductIdDB(req.params.id);

  res.send({
    data: result,
  });
};
