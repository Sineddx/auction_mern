import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import User from "../models/User.js";

const getSingleUser = async (req, res) => {
  const result = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json(result);
};
const getOtherUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new BadRequestError("No id in request");
  }
  const result = await User.findOne({ _id: id });
  res.status(StatusCodes.OK).json(result);
};
const addUserAddress = async (req, res) => {
  const id = req.user.userId;
  if (!id) {
    throw new BadRequestError("No id in request");
  }
  const { name, lastName, address1, address2, state, city, postalCode, phone } =
    req.body;
  const user = await User.findOne({ _id: id });
  user.addresses.push({
    name,
    lastName,
    address1,
    address2,
    state,
    city,
    postalCode,
    phone,
  });
  user.save();
  res.status(StatusCodes.OK).json(user.addresses);
};

export { getSingleUser, getOtherUser, addUserAddress };
