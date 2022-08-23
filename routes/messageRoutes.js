import express from "express";
const router = express.Router();

import { addMessage, getMessages } from "../controllers/messageController.js";
router.post("/", addMessage);
router.get("/:chatId", getMessages);

export default router;
