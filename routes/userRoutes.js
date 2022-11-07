import express from "express";
const router = express.Router();

import {
  getSingleUser,
  getOtherUser,
  addUserAddress,
  editUserAddress,
    addRatingToUser
} from "../controllers/userController.js";
import { authenticateUser } from "../middleware/authentication.js";
router.get("/:id", getOtherUser);
router.get("/", authenticateUser, getSingleUser);
router.post("/address", authenticateUser, addUserAddress);
router.patch("/address", authenticateUser, editUserAddress);
router.patch("/rating", authenticateUser,addRatingToUser )

export default router;
