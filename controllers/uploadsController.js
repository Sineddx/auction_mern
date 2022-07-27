import path from "path";
import { StatusCodes } from "http-status-codes";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { imageObject } from "../utils/imageObject.js";

const uploadProductImage = async (req, res) => {
  const files = req.files.images;
  const urls = [];
  if (files.length > 1) {
    await Promise.all(
      files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
          use_filename: true,
          folder: "products",
        });
        fs.unlinkSync(file.tempFilePath);
        const newImage = imageObject({
          url: result.secure_url,
          id: result.public_id,
        });
        urls.unshift(newImage);
      })
    );
  } else {
    const result = await cloudinary.uploader.upload(files.tempFilePath, {
      use_filename: true,
      folder: "products",
    });
    fs.unlinkSync(files.tempFilePath);
    const newImage = imageObject({
      url: result.secure_url,
      id: result.public_id,
    });
    urls.push(newImage);
  }
  console.log(urls);
  return res.status(StatusCodes.OK).json({ urls });
};
const deleteUploadedImage = async (req, res) => {
  const { id } = req.body;
  await cloudinary.uploader.destroy(id);
  res.status(StatusCodes.OK).json({ msg: "image deleted!" });
};
export { uploadProductImage, deleteUploadedImage };