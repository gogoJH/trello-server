import express from "express";
import controller from "../controller/board";

const router = express.Router();

router.get("/", controller.getCards);

export = router;
