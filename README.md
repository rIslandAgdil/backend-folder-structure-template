# 🚀 Backend Template: Node.js, Express, dan Prisma

[![Node.js Version](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![Express Version](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
[![Prisma Version](https://img.shields.io/badge/Prisma-5.x-9400D3.svg)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-ISC-brightgreen.svg)](LICENSE)

Templat *backend* terstruktur yang dibangun di atas **Express.js** dan menggunakan **Prisma** sebagai ORM. Menggunakan arsitektur berlapis (**Controller-Repository**) untuk skalabilitas dan pemisahan tugas.

---

## 📦 Teknologi Kunci yang Digunakan

| Kategori | Teknologi | Tujuan |
| :--- | :--- | :--- |
| **Server** | Node.js, Express | Lingkungan *runtime* dan *framework* utama. |
| **Database** | Prisma, PostgreSQL/MySQL | Object-Relational Mapper (ORM) modern dan *driver* database. |
| **Authentication** | JWT, `bcrypt` | JSON Web Tokens untuk sesi dan *hashing* kata sandi. |
| **Utilities** | `cors`, `morgan`, `dotenv` | Penanganan CORS, *logging* HTTP, dan variabel lingkungan. |
| **Development**| `nodemon`, `jest` | *Auto-restart* server dan *Unit Testing* framework. |

---

## 🛠️ Persiapan dan Instalasi

### 1. Kloning Repositori

```bash
git clone <URL_REPOSITORY_ANDA>
cd backend-template
```

### 2. Instalasi Dependensi


```bash
npm install
```
### 3. Konfigurasi Lingkungan (.env)
### 4. Setup Database dan Skema Prisma

```bash
# 1. Terapkan Migrasi dan Buat Tabel
# Ini akan membuat database dan menjalankan semua migration
npm run prisma:migrate 

# 2. Generate Prisma Client
# Ini wajib dijalankan setiap kali schema.prisma diubah
npm run prisma:generate
```

## ▶️ Menjalankan Aplikasi
### Mode Pengembangan (Development)

Menggunakan nodemon untuk auto-reload:
```bash
npm run dev
```
*Server akan berjalan di: http://localhost:5000 (atau PORT yang didefinisikan).*

### Mode Produksi (Production)
```bash
npm start
```

## 🛡️ Authentication dan Security
### Middleware Utama

- **verifyToken**: Memverifikasi JWT (dari Header Authorization: Bearer atau Cookie). Jika sukses, data pengguna akan tersedia di req.user.


- **Protected Routes**: Semua route yang didefinisikan dalam src/routes/protectedRoutes.js secara otomatis melewati verifyToken tanpa perlu menuliskannya berulang kali.

## 🧪 Unit Testing
Proyek ini terkonfigurasi untuk menggunakan Jest untuk unit testing. Kami merekomendasikan unit test difokuskan pada lapisan Repository dengan teknik Mocking untuk mengisolasi database.

Menjalankan Test
```bash
npm test
```
*(Pastikan file test Anda berada di src/tests/ dan menggunakan jest.mock() untuk dependensi eksternal.)*

## 🤝 Kontribusi
Kami menyambut kontribusi! Jika Anda menemukan bug atau memiliki saran perbaikan
