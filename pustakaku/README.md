
# PustakaKu

PustakaKu adalah aplikasi web untuk mengelola data buku perpustakaan sekolah secara digital menggunakan Next.js dan SQLite.

## Tech Stack
- Next.js (App Router)
- TypeScript
- SQLite
- Prisma ORM
- Tailwind CSS

## Features
- Landing Page (`/`): Informasi aplikasi.
- Daftar Buku (`/buku`): Menampilkan dan mencari buku.
- Detail Buku (`/buku/[id]`): Menampilkan informasi lengkap buku.
- Tambah Buku (`/buku/baru`): Menambahkan buku baru.
- Indikator stok buku kosong.

## Installation

1. Clone repository:
   ```bash
   git clone <REPOSITORY_URL>
   ```

2. Masuk ke folder project:
   ```bash
   cd pustakaku
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Jalankan database migration:
   ```bash
   npx prisma migrate dev
   ```

5. Jalankan aplikasi:
   ```bash
   npm run dev
   ```

6. Buka http://localhost:3000

## Developer

- Project: PustakaKu
- Course: Web Application Development
- University: Universitas Prasetiya Mulya
- Year: 2026
