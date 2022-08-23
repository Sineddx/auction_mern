import { StatusCodes } from "http-status-codes";
import Message from "../models/Message.js";

const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const message = new Message({
    chatId,
    senderId,
    text,
  });
  const result = await message.save();
  res.status(StatusCodes.OK).json(result);
};

const getMessages = async (req, res) => {
  const { chatId } = req.params;
  const result = await Message.find({ chatId });
  res.status(StatusCodes.OK).json(result);
};

export { addMessage, getMessages };
