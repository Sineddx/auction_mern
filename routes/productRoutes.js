import express from "express";
const router = express.Router();

import { uploadProductImage } from "../controllers/uploadsController.js";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController.js";

router.route("/").post(createProduct).get(getAllProducts);
router.route("/uploads").post(uploadProductImage);

export default router;
