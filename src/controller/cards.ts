import { Request, Response } from "express";
import "reflect-metadata";
import { getRepository } from "typeorm";
import { Cards } from "../entity/Cards";

export = {
  getCards: async (req: Request, res: Response) => {
    try {
      const id = req.query.boardId;
      const cards = await getRepository(Cards)
        .createQueryBuilder("cards")
        .where("boardsId = :id", { id: id })
        .leftJoinAndSelect("cards.list", "list")
        .getMany();

      res.json(cards);
    } catch (e) {
      res.status(404).json({ message: e.message });
      throw new Error(e);
    }
  },

  addCards: async (req: Request, res: Response) => {
    const { boardId, title } = req.body;
    const card = new Cards();
    card.title = title;
    card.boards = boardId;

    await getRepository(Cards).save(card);

    res.json("ok");
  },

  deleteCards: async (req: Request, res: Response) => {
    const { cardId } = req.query;
    console.log("cardId", cardId);
    try {
      await getRepository(Cards)
        .createQueryBuilder()
        .delete()
        .from(Cards)
        .where("id = :id", { id: cardId })
        .execute();

      res.json("ok");
    } catch (e) {
      if (e.errno === 1451) {
        res.json("list");
      }
    }
  }
};
