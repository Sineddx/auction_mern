import express from "express";
const router = express.Router();

import { register, login, logout } from "../controllers/authController.js";
import { authenticateUser } from "../middleware/authentication.js";

router.post("/register", register);
router.post("/login", login);
router.delete("/logout", authenticateUser, logout);

export default router;
