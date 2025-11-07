// server.js
require("dotenv").config(); // Muat variabel lingkungan
const app = require("./src/app");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT} (${process.env.NODE_ENV})`);
});
