import express, { Request, Response, NextFunction, request } from "express";
import db from "./common/dbc";
import cors from "cors";
import router from "./api/index";

const app = express();

db.connection();

app.use(cors({ credentials: true }));
app.use(express.json());

app.use(router);

app.listen(4000, () => {
  console.log("start");
});
