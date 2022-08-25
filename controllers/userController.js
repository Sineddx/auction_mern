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

export { getSingleUser, getOtherUser };
