import express from "express";
import controller from "../controller/boards";

const router = express.Router();

router.get("/", controller.getBoards);
router.post("/", controller.addBoards);
router.delete("/", controller.deleteBoards);

export = router;
