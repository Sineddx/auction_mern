import express from "express";
const router = express.Router();

import {
  getSingleUser,
  getOtherUser,
  addUserAddress,
} from "../controllers/userController.js";
import { authenticateUser } from "../middleware/authentication.js";
router.get("/:id", getOtherUser);
router.get("/", authenticateUser, getSingleUser);
router.post("/address", authenticateUser, addUserAddress);

export default router;
