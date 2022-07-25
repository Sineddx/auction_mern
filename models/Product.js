import mongoose from "mongoose";

//modify later
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("Product", ProductSchema);
