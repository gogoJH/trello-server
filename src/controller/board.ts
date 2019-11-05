import { Request, Response } from "express";
import "reflect-metadata";
import { getRepository } from "typeorm";
import { Boards } from "../entity/Boards";
import { Cards } from "../entity/Cards";

export = {
  getBoards: async (req: Request, res: Response) => {
    try {
      console.log("여기옴");
      const boards = await getRepository(Boards).find();
      res.json(boards);
    } catch (e) {
      res.status(404).json({ message: e.message });
      throw new Error(e);
    }
  },

  getCards: async (req: Request, res: Response) => {
    try {
      const id = req.query.boardId;
      console.log("여기");
      const cards = await getRepository(Boards)
        .createQueryBuilder("boards")
        .leftJoinAndSelect("boards.cards", "cards")
        .leftJoinAndSelect("cards.list", "list")
        .getMany();

      console.log(cards);

      res.json(cards);
    } catch (e) {
      res.status(404).json({ message: e.message });
      throw new Error(e);
    }
  }
};
