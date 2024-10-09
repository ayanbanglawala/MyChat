import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middlewear/protectRoute.js"; // Correct middleware path

const router = express.Router();

// Routes for messages
router.get("/:id", protectRoute, getMessage); // Fetch messages by conversation ID
router.post("/send/:userid", protectRoute, sendMessage); // Send a new message

export default router;
