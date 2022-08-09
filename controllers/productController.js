import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;

  const product = await Product.create(req.body);
  console.log(req.body.user);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

export { createProduct, getAllProducts };
