import express, { Request, Response } from "express";
import list from "./list";
import boards from "./boards";
import cards from "./cards";
import users from "./users";

const router = express.Router();

router.use("/users", users);
router.use("/boards", boards);
router.use("/cards", cards);
router.use("/list", list);

export = router;
