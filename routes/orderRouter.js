import express from "express";
const router = express.Router();

import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authentication.js";
import {
  getAllOrders,
  getCurrentUserOrders,
  createOrder,
} from "../controllers/orderController.js";

router
  .route("/")
  .get(authenticateUser, authorizePermissions("admin"), getAllOrders)
  .post(authenticateUser, createOrder);
router.route("/showAllMyOrders").get(authenticateUser, getCurrentUserOrders);

export default router;
