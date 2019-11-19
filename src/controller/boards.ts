import { Request, Response } from "express";
import "reflect-metadata";
import { getRepository } from "typeorm";
import { Boards } from "../entity/Boards";

export = {
  getBoards: async (req: Request, res: Response) => {
    try {
      const { id } = req.query;
      const boards = await getRepository(Boards)
        .createQueryBuilder("boards")
        .where("usersId = :id", { id })
        .getMany();

      console.log(boards);
      res.json(boards);
    } catch (e) {
      res.status(404).json({ message: e.message });
      throw new Error(e);
    }
  },

  addBoards: async (req: Request, res: Response) => {
    try {
      const { title, userId } = req.body;
      const board = new Boards();
      board.title = title;
      board.users = userId;

      await getRepository(Boards).save(board);

      res.json("ok");
    } catch (e) {
      throw new Error(e);
    }
  },

  deleteBoards: async (req: Request, res: Response) => {
    try {
      const { boardId } = req.query;

      await getRepository(Boards)
        .createQueryBuilder()
        .delete()
        .from(Boards)
        .where("id = :id", { id: boardId })
        .execute();

      res.json("ok");
    } catch (e) {
      throw new Error(e);
    }
  }
};
