import express, { Request, Response, NextFunction, request } from "express";
import cors from "cors";
import router from "./router/index";

const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log("start");
});
