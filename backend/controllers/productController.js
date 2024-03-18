import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../modals/productModal.js";

export const getProducts = asyncHandler(async (request, response) => {
  const products = await Product.find();
  response.json(products);
});
export const getProductsById = asyncHandler(async (request, response) => {
  const { id } = request.params;
  const product = await Product.findById(id);
  if (product) {
    response.json(product);
  }
  response.status(404);
  throw new Error("Resource not found");
});
export default getProducts;
