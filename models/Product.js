import mongoose from "mongoose";

//modify later
const biddersSchema = new mongoose.Schema({
    bidderId: {type: mongoose.Types.ObjectId, required: true},
    bidAmount: {type: Number, required: true},
})
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 5,
    },
    price: {
      type: Number,
      required: true,
      default: 9999999,
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
    state: {
      type: String,
      required: [true, "Please provide your state"],
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
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      default: "active",
    },
      bidders: [biddersSchema]
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ProductSchema.virtual("users", {
  ref: "User",
  localField: "_id",
  foreignField: "product",
  justOne: false,
});

export default mongoose.model("Product", ProductSchema);
