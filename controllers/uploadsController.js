import path from "path";
import { StatusCodes } from "http-status-codes";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

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
        urls.unshift(result.secure_url);
      })
    );
  } else {
    const result = await cloudinary.uploader.upload(files.tempFilePath, {
      use_filename: true,
      folder: "products",
    });
    fs.unlinkSync(files.tempFilePath);
    urls.push(result.secure_url);
  }
  return res.status(StatusCodes.OK).json({ urls });
};
export { uploadProductImage };
// {
//   image: {
//     src: result.secure_url;
//   }
// }
