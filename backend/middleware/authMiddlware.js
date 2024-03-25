import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../modals/userModal.js";

const protect = asyncHandler(async (request, response, next) => {
  let token;
  //READ JWT FROM COOKIE
  token = request.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      request.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      response.status(401);
      throw new Error("Not authorized", "token failed");
    }
  } else {
    response.status(401);
    throw new Error("Not authorized", "no token");
  }
});
const admin = (request, response, next) => {
  if (request.user && request.user.isAdmin) {
    next();
  } else {
    throw new Error("Not authorized as admin");
  }
};
export { protect, admin };
