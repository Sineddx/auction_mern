import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import User from "../models/User.js";
import badRequest from "../errors/bad-request.js";

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
  user.addresses.unshift({
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

const editUserAddress = async (req, res) => {
  const id = req.user.userId;
  if (!id) {
    throw new BadRequestError("No id in request");
  }
  const {
    name,
    lastName,
    address1,
    address2,
    state,
    city,
    postalCode,
    phone,
    _id,
  } = req.body;
  console.log(
    name,
    lastName,
    address1,
    address2,
    state,
    city,
    postalCode,
    phone,
    _id
  );
  if (
    !name ||
    !lastName ||
    !address1 ||
    !address2 ||
    !state ||
    !city ||
    !postalCode ||
    !phone ||
    !_id
  ) {
    throw new BadRequestError("Empty values");
  }

  const user = await User.findOne({ _id: id });
  const addressToEdit = user.addresses.find((x) => x._id == _id);

  console.log(addressToEdit);
  if (!addressToEdit) {
    throw new BadRequestError("No address in database");
  }

  addressToEdit.name = name;
  addressToEdit.lastName = lastName;
  addressToEdit.address1 = address1;
  addressToEdit.address2 = address2;
  addressToEdit.state = state;
  addressToEdit.city = city;
  addressToEdit.postalCode = postalCode;
  addressToEdit.phone = phone;

  user.save();
  res.status(StatusCodes.OK).json(user.addresses);
};

const addRatingToUser = async(req, res) => {

}

export { getSingleUser, getOtherUser, addUserAddress, editUserAddress, addRatingToUser };
