import express from "express";
const router = express.Router();

import {
  createChat,
  userChats,
  findChat,
} from "../controllers/chatController.js";
router.post("/", createChat);
router.get("/:userId", userChats);
router.get("/find/:firstId/:secondId", findChat);

export default router;
