// src/middlewares/verifyToken.js
const jwt = require("jsonwebtoken");
const { errorResponse } = require("../utils/response");

// Ambil kunci rahasia dari environment
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

/**
 * Middleware untuk memverifikasi JWT dan melindungi rute (route protection).
 * @param {object} req - Objek Request dari Express.
 * @param {object} res - Objek Response dari Express.
 * @param {function} next - Fungsi next() untuk melanjutkan ke controller/middleware berikutnya.
 */
const verifyToken = (req, res, next) => {
  let token;

  // 1. Coba ambil token dari Header Authorization (Skema Bearer)
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    // Format: "Bearer [token]"
    token = authHeader.split(" ")[1];
  }

  // 2. Jika tidak ada di Header, coba ambil dari Cookie
  if (!token && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  // 3. Periksa keberadaan token
  if (!token) {
    // Menggunakan helper errorResponse (401 Unauthorized)
    return errorResponse(res, 401, "Akses ditolak. Token tidak ditemukan.");
  }

  try {
    // 4. Verifikasi Token
    const decoded = jwt.verify(token, JWT_SECRET_KEY);

    // 5. Suntikkan data user ke objek request (misalnya req.user)
    // Data ini akan diteruskan ke controller Anda.
    req.user = decoded;

    // Lanjutkan ke controller atau middleware berikutnya
    next();
  } catch (err) {
    // Token tidak valid (expired, signature salah, dll.)
    return errorResponse(res, 401, "Token tidak valid atau kedaluwarsa.");
  }
};

module.exports = verifyToken;
