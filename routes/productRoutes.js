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

router.route("/").post(createProduct).get(getAllProducts);
router.route("/uploads").post(uploadProductImage);
router.route("/uploads/destroy").post(deleteUploadedImage);
export default router;
