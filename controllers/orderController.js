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
  // const { seller, item: itemId, amount, deliveryType } = req.body;

  const {
    item: itemId,
    parcelLockerNumber,
    paymentInfo,
    amount,
    deliveryType,
    address,
  } = req.body;

  const { userId: buyer } = req.user;
  if (!itemId || !amount || !deliveryType || !paymentInfo || !address) {
    throw new BadRequestError("Something went wrong");
  }

  const item = await Product.findOne({ _id: itemId });
  if (!item) {
    throw new BadRequestError("There is no item with that ID");
  }
  if (amount > item.quantity) {
    throw new BadRequestError("You can't order that many items");
  }
  const seller = await User.findOne({ _id: item.user._id });
  if (!seller) {
    throw new BadRequestError("No seller found");
  }
  const total = item.price * amount + 10;
  const date = new Date();
  let payment = paymentInfo;
  if (payment === "karta kredytowa") {
    payment = "credit card";
  }

  const order = await Order.create({
    seller,
    buyer,
    item,
    amount,
    total,
    date,
    deliveryType,
    paymentInfo: payment,
    addressDelivery: address,
    parcelLockerNumber:
      deliveryType === "parcelLocker-inpost" && parcelLockerNumber,
  });

  const newAmount = item.quantity - amount;

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

const updateOrder = async (req, res) => {
  const { id: orderId } = req.body;

  const order = await Order.findOne({ _id: orderId });
  const { userId: buyer } = req.user;

  if (!order || !buyer) {
    throw new BadRequestError("Can't find this order in my DB!");
  }
  if (order.status === "paid") {
    throw new BadRequestError("Order is already paid");
  }

  if (buyer != order.buyer._id) {
    throw new BadRequestError("You are not allowed to pay for this order!");
  }

  order.status = "paid";
  order.save();

  res.status(StatusCodes.OK).json({ status: "PAYMENT ACCEPTED" });
};

export { getAllOrders, getCurrentUserOrders, createOrder, updateOrder };
