//basic imports
import connectDB from "./db/connect.js";
import express from "express";
import morgan from "morgan";

//...
import dotenv from "dotenv";
dotenv.config();

//prepare server
const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
//middleware + routes

app.get("/", (req, res) => {
  res.send("Everything OK");
});
//start server

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log("Server is listening on port 5000..."));
  } catch (error) {
    console.log(error);
  }
};

start();
