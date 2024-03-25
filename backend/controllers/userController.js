import asyncHandler from "../middleware/asyncHandler.js";
import User from "../modals/userModal.js";
import jwt from "jsonwebtoken";
const authUser = asyncHandler(async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    //Set JWT as HTTP-Only cookie
    response.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    });
    response.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    response.status(404);
    throw new Error(`invalid email or password`);
  }
});
const logout = asyncHandler(async (request, response) => {});
const registerUser = asyncHandler(async (request, response) => {
  response.send("register user");
});
const logoutUser = asyncHandler(async (request, response) => {
  response.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  response.status(200).json({ message: "Logged out successfully" });
});
const getUserProfile = asyncHandler(async (request, response) => {
  response.send("get user profile");
});
const updateUserProfile = asyncHandler(async (request, response) => {
  response.send("update user");
});
const getUsers = asyncHandler(async (request, response) => {
  response.send("get all users");
});
const deleteUser = asyncHandler(async (request, response) => {
  response.send("delete user");
});
const getUserById = asyncHandler(async (request, response) => {
  response.send("get user by id");
});
const updateUser = asyncHandler(async (request, response) => {
  response.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
