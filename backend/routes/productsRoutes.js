import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../modals/productModal.js";
const router = express.Router();
router.get(
  "/",
  asyncHandler(async (request, response) => {
    const products = await Product.find();
    response.json(products);
  })
);
router.get(
  "/:id",
  asyncHandler(async (request, response) => {
    const { id } = request.params;
    const product = await Product.findById(id);
    if (product) {
      response.json(product);
    }
    response.status(404).json({ message: "Product Not found" });
  })
);

export default router;
