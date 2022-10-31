import { StatusCodes } from "http-status-codes";
import ChatModel from "../models/Chat.js";

const createChat = async (req, res) => {
  const existingChat = await ChatModel.findOne({
    members: { $all: [req.body.senderId, req.body.receiverId] },
  });
  if (existingChat) {
    res
      .status(200)
      .json({ newChat: existingChat, message: "Chat already existed" });
    return;
  }

  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
  });
  const result = await newChat.save();

  res.status(200).json({ newChat: result, message: "Chat created" });
};

const userChats = async (req, res) => {
  const chat = await ChatModel.find({
    members: { $in: [req.params.userId] },
  });
  res.status(StatusCodes.OK).json(chat);
};

const findChat = async (req, res) => {
  const chat = await ChatModel.findOne({
    members: { $all: [req.params.firstid, req.params.secondId] },
  });
  res.status(StatusCodes.OK).json(chat);
};

export { createChat, userChats, findChat };
