import mongoose from "mongoose";

//modify later
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: [{}],
      required: true,
    },
    description: {
      type: String,
      requried: true,
    },
    category: {
      type: String,
      required: [true, "Please provide product category"],
      enum: [
        "Książki",
        "Uroda",
        "Firma i usługi",
        "Dziecko",
        "Zdrowie",
        "Sport",
        "Motoryzacja",
        "Moda",
        "Kultura i rozrywka",
        "Elektronika",
      ],
    },
    auctionType: {
      type: String,
      required: [true, "Please provide type of auction"],
      enum: ["buyNow", "bid", "advertisement"],
    },
    location: {
      type: String,
      required: [true, "Please provide a location"],
    },
    deliveryOptions: {
      type: [String],
      required: [true, "Please provide delivery options"],
    },
    quantity: {
      type: Number,
      default: 1,
    },
    expiringDate: {
      type: Date,
      required: [true, "Please provide a date"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
