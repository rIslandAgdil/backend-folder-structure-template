const express = require("express");
const verifyToken = require("./verifyToken");

const createProtectedRoute = () => {
  const route = express.Router();

  // definisikan middleware
  route.use(verifyToken);

  // mengembaika route yang sudah di initial middleware agar bisa digunakan
  return route;
};

module.exports = createProtectedRoute;
