import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
const app = express();
connectDB();
app.get("/", (request, response) => {
  response.send("API is running ...");
});
app.get("/api/products", (request, response) => {
  response.json(products);
});
app.get("/api/product/:id", (request, response) => {
  const { id } = request.params;
  const product = products.find((product) => product._id === id);
  response.send(product);
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});
