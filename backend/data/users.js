import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hash("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jack Reacher",
    email: "jack@email.com",
    password: bcrypt.hash("123456", 10),
    isAdmin: false,
  },
  {
    name: "John doe",
    email: "john@email.com",
    password: bcrypt.hash("123456", 10),
    isAdmin: false,
  },
];
