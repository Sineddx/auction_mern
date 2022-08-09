import express from "express";
const router = express.Router();

import {
  uploadProductImage,
  deleteUploadedImage,
} from "../controllers/uploadsController.js";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController.js";
import { authenticateUser } from "../middleware/authentication.js";
router.route("/").post(authenticateUser, createProduct).get(getAllProducts);
router.route("/uploads").post(uploadProductImage);
router.route("/uploads/destroy").post(deleteUploadedImage);
export default router;
