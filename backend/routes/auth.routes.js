import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
const router = express.Router(); // Use 'Router' with a capital 'R'

router.post("/login", login);
router.post("/logout", logout);
router.post("/signup", signup);

export default router;
