import { Request, Response } from "express";
import "reflect-metadata";
import { getRepository } from "typeorm";
import { List } from "../entity/List";
import { getMaxListeners } from "cluster";

export = {
  getList: async (req: Request, res: Response) => {
    const { cardId } = req.query;
    console.log("id:" + cardId);
    const newData = await getRepository(List)
      .createQueryBuilder("list")
      .where("list.cardsId = :id", { id: cardId })
      .getMany();
    res.json(newData);
  },

  setList: async (req: Request, res: Response) => {
    const { id, title } = req.body;
    await getRepository(List)
      .createQueryBuilder()
      .update(List)
      .set({ title })
      .where("id=:id", { id })
      .execute();
  },

  addList: async (req: Request, res: Response) => {
    const { cardsId, title } = req.body;

    const list = new List();
    list.title = title;
    list.cards = cardsId;

    await getRepository(List).save(list);

    res.json("ok");
  },

  deleteList: async (req: Request, res: Response) => {
    const { listId } = req.query;
    await getRepository(List)
      .createQueryBuilder()
      .delete()
      .from(List)
      .where("id = :id", { id: listId })
      .execute();

    res.json("ok");
  }
};
