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
  updateOrder,
  getSingleOrder, closeOrder
} from "../controllers/orderController.js";
import {addRatingToUser} from "../controllers/userController.js";

router
  .route("/")
  .get(authenticateUser, authorizePermissions("admin"), getAllOrders)
  .post(authenticateUser, createOrder);
router.route("/update").patch(authenticateUser, updateOrder);
router.route("/showAllMyOrders").get(authenticateUser, getCurrentUserOrders);
router.route("/showOneOrder/:orderId").get(authenticateUser, getSingleOrder);
router.patch("/rating", authenticateUser, closeOrder )

export default router;
