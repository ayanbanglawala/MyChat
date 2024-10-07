import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middlewear/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute , getMessage);
router.post("/send/:userid", protectRoute , sendMessage);

export default router;
