import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

export { createProduct, getAllProducts };
