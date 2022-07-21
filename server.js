//dotenv + async errors
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

//basic imports
import connectDB from "./db/connect.js";
import express from "express";
import morgan from "morgan";

//middleware imports
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import cookieParser from "cookie-parser";
//router imports
import authRouter from "./routes/authRoutes.js";

//prepare server
const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.get("/", (req, res) => {
  res.send("Everything OK");
});

app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
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
