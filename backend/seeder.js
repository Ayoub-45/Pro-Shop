import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./modals/userModal.js";
import Order from "./modals/orderModal.js";
import Product from "./modals/productModal.js";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("importing data ...".yellow.inverse);
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data imported".green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit();
  }
};
const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();
    console.log(`Data destroyed`.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
