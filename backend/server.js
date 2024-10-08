/** @format */

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connect } from './db/DB.js'
import userRouter from "./mvc/route/userRoute.js";
import adminRouter from "./mvc/route/adminRoute.js";
import vendorRoute from "./mvc/route/vendorRoute.js";
const app = express();
dotenv.config();
// middlewares
app.use(cors());
app.use(express.json(""));
app.use(morgan("dev"));
// DB
connect()
app.get("/", (req, res) => {
  res.send("hello server");
});
// api
app.use("/api/v1/car-rental/user", userRouter);
app.use("/api/v1/car-rental",adminRouter)
app.use("/api/v1/car-rental/vendor", vendorRoute);
// listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
app.listen();
