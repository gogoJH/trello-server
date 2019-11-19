import express from "express";
import "reflect-metadata";
import { DB_Connect } from "./common/dbc";
import cors from "cors";
import router from "./api/index";
import { salt } from "./config";
import { json } from "body-parser";

const app = express();

DB_Connect();

app.use(
  cors({
    origin: process.env.LOCAL_URL || process.env.CLIENT_URL,
    credentials: true
  })
);
app.use(json());

app.set("jwt-secret", salt);

app.use(router);

app.listen(4000, () => {
  console.log("start");
});
