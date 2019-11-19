import express from "express";
import controller from "../controller/users";
import auth from "../middlewares/TokenCheck";

const router = express.Router();

router.get("/", auth, controller.getUser);
router.put("/", auth, controller.setUser);
router.get("/login", controller.login);
router.get("/check", controller.check);
router.post("/", controller.signUp);

export = router;
