import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;

  const product = await Product.create(req.body);
  console.log(req.body.user);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const { search, category, state, auctionType, sort } = req.query;

  const queryObject = {
    status: "active",
  };
  if (category && category !== "Wszystkie") {
    queryObject.category = category;
  }
  if (state && state !== "Wszystkie") {
    queryObject.state = state;
  }
  if (auctionType && auctionType !== "Wszystkie") {
    if (auctionType === "Kup teraz") {
      queryObject.auctionType = "buyNow";
    }
    if (auctionType === "Licytacja") {
      queryObject.auctionType = "bid";
    }
    if (auctionType === "Ogłoszenie") {
      queryObject.auctionType = "advertisement";
    }
  }
  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  let result = Product.find(queryObject).populate("user");

  if (sort === "Ostatnio dodane") {
    result = result.sort("-createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("name");
  }
  if (sort === "z-a") {
    result = result.sort("-name");
  }
  if (sort === "Najniższa cena") {
    result = result.sort("price");
  }
  if (sort === "Najwyższa cena") {
    result = result.sort("-price");
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const products = await result;
  const totalProducts = await Product.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalProducts / limit);
  res.status(StatusCodes.OK).json({ products, totalProducts, numOfPages });
};
const getSingleOffer = async (req, res) => {
  const { id } = req.params;
  const offer = await Product.findOne({ _id: id }).populate("user");
  if (!offer) {
    throw new BadRequestError("Cant find that offer");
  }
  console.log(offer);
  res.status(StatusCodes.OK).json({ offer });
};

const raiseThePrice = async(req, res) => {
  const {id: _id, bump: bidAmount} = req.body;
  const bidderId = req.user.userId;
  const offer = await Product.findOne({_id});
  if(!offer){
    throw new BadRequestError("Can't find that offer")
  }
  if(bidAmount < offer.price){
    throw new BadRequestError("You can't bid less than the current bid")
  }
  offer.bidders.push({bidderId, bidAmount})
  offer.price = bidAmount;
  offer.save();
  res.status(StatusCodes.OK).json({offer})
}

export { createProduct, getAllProducts, getSingleOffer, raiseThePrice };
