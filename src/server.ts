import express, { Request, Response, NextFunction, request } from "express";
import "reflect-metadata";
import { ORMConnect } from "./common/dbc";
import cors from "cors";
import router from "./api/index";

const app = express();

ORMConnect();

app.use(cors({ credentials: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.use(router);

app.listen(4000, () => {
  console.log("start");
});
