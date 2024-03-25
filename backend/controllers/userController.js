import asyncHandler from "../middleware/asyncHandler.js";
import User from "../modals/userModal.js";
import generateToken from "../utils/generateToken.js";
const authUser = asyncHandler(async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(response, user._id);
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
  const { email, password, name } = request.body;
  const userExists = await User.findOne({ email });
  console.log(userExists);
  if (userExists) {
    response.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    password,
    email,
  });
  if (user) {
    generateToken(response, user._id);
    response.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    response.status(400);
    throw new Error("Invalid user data");
  }
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
