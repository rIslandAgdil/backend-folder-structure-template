// src/app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const router = require("./routes/index"); // Asumsi Anda punya index router
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Konfigurasi CORS (Sesuaikan dengan frontend Anda)
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true,
};

// Middleware Global
app.use(cors(corsOptions));
app.use(morgan("dev")); // Logging HTTP requests
app.use(express.json()); // Body parser (untuk JSON)
app.use(cookieParser()); // Cookie parser

// Routes
app.use("/api", router); // Semua rute diawali /api

// Error Handler (Harus diletakkan paling akhir)
app.use(errorHandler);

module.exports = app;
