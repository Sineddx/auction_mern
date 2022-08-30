import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  buyer: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "failed", "paid", "delivered", "canceled"],
    default: "pending",
  },
  item: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
  },
  deliveryType: {
    type: {},
    required: true,
  },
});

export default mongoose.model("Order", OrderSchema);
