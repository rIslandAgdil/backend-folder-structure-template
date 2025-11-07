// src/config/prisma.js
const { PrismaClient } = require("@prisma/client");

// Ekspor satu instance global untuk menghindari banyak koneksi
const prisma = new PrismaClient();

module.exports = prisma;
