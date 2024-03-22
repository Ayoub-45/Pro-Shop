import asyncHandler from "../middleware/asyncHandler.js";
import User from "../modals/userModal.js";
const authUser = asyncHandler(async (request, response) => {
  response.send("Auth user");
});

const registerUser = asyncHandler(async (request, response) => {
  response.send("register user");
});
const logoutUser = asyncHandler(async (request, response) => {
  response.send("logout user");
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
