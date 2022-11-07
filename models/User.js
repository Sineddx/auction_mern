import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const singleAddressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: Number, required: true },
  phone: { type: Number, required: true },
});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: 6,
      select: false,
    },
    surname: {
      type: String,
      required: [true, "Please provide surname"],
      minLength: 6,
    },
    addresses: [singleAddressSchema],
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    birthday: {
      type: Date,
    },
    nickname: {
      type: String,
      required: [true, "Please provide nickname"],
      unique: true,
    },
    addedAuctions: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
    purchasedItems: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
    soldItems: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
      ratings: {
        type: []
      }
  },
  { timestamps: true }
);


UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (candidate) {
  const isMatch = await bcrypt.compare(candidate, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
