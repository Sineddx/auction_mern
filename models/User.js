import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const singleAddressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: Number, required: true },
  telephone: { type: Number, required: true },
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
