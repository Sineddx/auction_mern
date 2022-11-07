import express from "express";
const router = express.Router();

import {
  uploadProductImage,
  deleteUploadedImage,
} from "../controllers/uploadsController.js";
import {
  createProduct,
  getAllProducts,
  getSingleOffer, raiseThePrice,
} from "../controllers/productController.js";
import { authenticateUser } from "../middleware/authentication.js";
router.route("/").post(authenticateUser, createProduct).get(getAllProducts);
router.route("/:id").get(getSingleOffer);
router.route("/uploads").post(uploadProductImage);
router.route("/uploads/destroy").post(deleteUploadedImage);
router.route("/updatePrice").patch(authenticateUser, raiseThePrice)
export default router;
