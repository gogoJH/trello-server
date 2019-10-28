import express, { Request, Response } from "express";
import list from "./list";
import boards from "./boards";
import card from "./cards";

const router = express.Router();

router.use("./boards", boards);
router.use("./cards", card);
router.use("./list", list);

export = router;
