import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import routes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
const port = process.env.PORT || 5000;
const app = express();
connectDB();
app.get("/", (request, response) => {
  response.send("API is running ...");
});
app.use("/api/products", routes);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log("Server running on port " + port);
});
