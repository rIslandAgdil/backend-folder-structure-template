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
