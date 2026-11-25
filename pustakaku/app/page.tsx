// src/app/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="space-y-10 py-4">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 px-6 py-12 text-center text-slate-100 shadow-sm sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-1 text-xs font-medium text-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Sistem Perpustakaan Digital
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selamat Datang di Pustakaku SMA Prasetiya Mulya
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            Pustakaku adalah aplikasi web pencatatan perpustakaan yang
            menggantikan sistem pendataan buku manual di SMA Prasetiya Mulya.
            Platform ini memudahkan siswa dan pustakawan untuk menelusuri
            katalog buku, memantau ketersediaan stok secara langsung, membaca
            ringkasan informasi buku, serta mencatat koleksi baru ke dalam
            database.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/buku"
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-blue-500"
            >
              Jelajahi Daftar Buku &rarr;
            </Link>
            <Link
              href="/buku/baru"
              className="rounded-lg border border-slate-600 bg-slate-800/70 px-6 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-700"
            >
              + Tambah Koleksi Buku
            </Link>
          </div>
        </div>
      </section>

      {/* Ringkasan Fitur Utama */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            Fitur Utama Perpustakaan
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Pengelolaan data buku yang ringkas dan akurat dalam satu tempat
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-slate-300">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-800">
              01
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">
              Katalog & Pencarian Cepat
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              Cari koleksi buku berdasarkan judul atau nama penulis secara
              instan tanpa perlu membuka buku catatan fisik.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-slate-300">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-800">
              02
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">
              Pantau Stok Real-Time
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              Informasi jumlah eksemplar tersedia tampil jelas dengan indikator
              warna merah otomatis ketika stok sedang kosong.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-slate-300">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-800">
              03
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">
              Pencatatan Koleksi Baru
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              Input data buku baru lengkap dengan kategori, tahun terbit, jumlah
              stok, dan deskripsi singkat langsung ke database.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}