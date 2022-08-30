import Order from "../models/Order.js";
import User from "../models/User.js";
import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};

const getCurrentUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.userId });
  res.status(StatusCodes.OK).json({ orders });
};

const createOrder = async (req, res) => {
  const { seller, item: itemId, amount, deliveryType } = req.body;
  const { userId: buyer } = req.user;
  if (!seller || !itemId || !amount) {
    throw new BadRequestError("Something went wrong");
  }

  const item = await Product.findOne({ _id: itemId });
  if (!item) {
    throw new BadRequestError("There is no item with that ID");
  }
  if (amount > item.quantity) {
    throw new BadRequestError("You can't order that many items");
  }
  const total = item.price * amount + deliveryType.price;
  const date = new Date();

  const order = await Order.create({
    seller,
    buyer,
    item,
    amount,
    total,
    date,
    deliveryType,
  });
  if (newAmount === 0) {
    await Product.updateOne(
      { _id: item._id },
      { $set: { quantity: newAmount, status: "Ended" } }
    );
  } else {
    await Product.updateOne(
      { _id: item._id },
      { $set: { quantity: newAmount } }
    );
  }
  item.quantity = amount;
  await User.updateOne({ _id: buyer }, { $push: { purchasedItems: item } });
  await User.updateOne({ _id: seller }, { $push: { soldItems: item } });
  res.status(StatusCodes.CREATED).json({ order });
};

export { getAllOrders, getCurrentUserOrders, createOrder };
