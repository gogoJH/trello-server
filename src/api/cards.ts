import express from "express";
import controller from "../controller/cards";

const router = express.Router();

router.get("/", controller.getCards);
router.post("/", controller.addCards);
router.delete("/", controller.deleteCards);
export = router;
