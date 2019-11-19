import { Response } from "express";
import "reflect-metadata";
import { getRepository } from "typeorm";
import { Users } from "../entity/Users";
import crypto from "crypto";
import { salt } from "../config";
import createToken from "../middlewares/CreateToken";
import express from "express";

interface Request extends express.Request {
  decoded?: any;
}

export = {
  getUser: async (req: Request, res: Response) => {
    const { id } = req.decoded;

    const userData = await getRepository(Users).findOne({ id });
    delete userData.password;

    res.json(userData);
  },

  setUser: async (req: Request, res: Response) => {
    const { email, nickname, password } = req.body.newData;
    const { id } = req.decoded;
    try {
      const data = await getRepository(Users)
        .createQueryBuilder()
        .update(Users)
        .set(password ? { email, nickname, password } : { email, nickname })
        .where("id=:id", { id })
        .execute();

      console.log(data);
    } catch (e) {
      throw new Error(e);
    }
  },

  login: async (req: Request, res: Response) => {
    let { username, password } = req.query;

    const hashPassword = await crypto
      .createHmac("sha1", salt)
      .update(password)
      .digest("base64")
      .replace("=", "");

    password = hashPassword;

    try {
      const userData = await getRepository(Users)
        .createQueryBuilder("users")
        .where("users.userName = :id", { id: username })
        .getOne();

      const token = await createToken(userData);

      res.setHeader("Set-Cookie", "HttpOnly;Secure;SamSite=Strict");

      userData.password === password
        ? res.json({ massage: true, token })
        : res.json({ massage: false });

      // res.json(newData);
    } catch (e) {
      res.json({ message: e.message });
      throw new Error(e);
    }
  },

  check: async (req: Request, res: Response) => {
    const { username } = req.query;
    const a = await getRepository(Users).findOne({ username });
    res.send(a ? false : true);
  },

  signUp: async (req: Request, res: Response) => {
    const userData = req.body;
    const hashPassword = await crypto
      .createHmac("sha1", salt)
      .update(userData.password)
      .digest("base64")
      .replace("=", "");

    userData.password = hashPassword;

    try {
      await getRepository(Users).save(userData);
      res.json("ok");
    } catch (e) {
      res.status(403).json({ message: e.message });
      throw new Error(e);
    }
  }
};
