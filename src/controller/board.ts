import { Request, Response } from "express";
import "reflect-metadata";
import { getRepository, createQueryBuilder, Any } from "typeorm";
// import { boards } from "../entity/Boards";

export = {
  getBoards: async (req: Request, res: Response) => {
    console.log("여기 왔다.");
    res.json("성공");
  }
};
