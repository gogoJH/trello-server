import { Request, Response } from "express";
import "reflect-metadata";
import { getRepository } from "typeorm";
import { Boards } from "../entity/Boards";

export = {
  getBoards: async (req: Request, res: Response) => {
    try {
      const boards = await getRepository(Boards).find();
      res.json(boards);
    } catch (e) {
      res.status(404).json({ message: e.message });
      throw new Error(e);
    }
  }
};