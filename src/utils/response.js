/**
 * Mengirim response sukses (Status 200/201) ke client.
 * @param {object} res - Objek Response dari Express.
 * @param {number} statusCode - Kode status HTTP (default: 200).
 * @param {string} message - Pesan sukses yang akan ditampilkan.
 * @param {object | array | null} data - Data utama yang akan dikirim (opsional).
 */
const successResponse = (res, statusCode = 200, message, data = null) => {
  // Pastikan statusCode adalah 200-an
  if (statusCode < 200 || statusCode >= 300) {
    statusCode = 200;
  }

  const responseBody = {
    success: true,
    message: message,
  };

  // Tambahkan data hanya jika ada
  if (data !== null) {
    responseBody.data = data;
  }

  return res.status(statusCode).json(responseBody);
};

/**
 * Mengirim response error (Status 4xx/5xx) ke client.
 * Catatan: Di aplikasi production, error 500 biasanya ditangani oleh middleware errorHandler.
 * Fungsi ini lebih sering digunakan untuk error klien (400, 404, 401, 403).
 * * @param {object} res - Objek Response dari Express.
 * @param {number} statusCode - Kode status HTTP (default: 500).
 * @param {string} message - Pesan error.
 * @param {array | string | null} errors - Detail tambahan tentang error (opsional).
 */
const errorResponse = (res, statusCode = 500, message, errors = null) => {
  // Pastikan statusCode adalah 400-an atau 500-an
  if (statusCode < 400) {
    statusCode = 500;
  }

  const responseBody = {
    success: false,
    message: message,
  };

  // Tambahkan detail error jika ada
  if (errors !== null) {
    responseBody.errors = errors;
  }

  return res.status(statusCode).json(responseBody);
};

module.exports = {
  successResponse,
  errorResponse,
};
