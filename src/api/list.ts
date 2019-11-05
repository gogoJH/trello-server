import express from "express";
import controller from "../controller/list";

const router = express.Router();

router.get("/", controller.getList);
router.put("/", controller.setList);
router.post("/", controller.addList);
router.delete("/", controller.deleteList);
export = router;
