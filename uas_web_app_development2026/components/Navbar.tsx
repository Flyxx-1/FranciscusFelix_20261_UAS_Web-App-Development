// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Logo & Nama Aplikasi */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white transition group-hover:bg-blue-900">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold leading-none tracking-tight text-slate-900">
              Pustakaku
            </span>
            <span className="mt-0.5 text-[10px] font-medium text-slate-500">
              SMA Prasetiya Mulya
            </span>
          </div>
        </Link>

        {/* Menu Navigasi */}
        <div className="flex items-center gap-2 text-sm font-medium sm:gap-5">
          <Link
            href="/"
            className="rounded-lg px-2.5 py-1.5 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Beranda
          </Link>
          <Link
            href="/buku"
            className="rounded-lg px-2.5 py-1.5 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Daftar Buku
          </Link>
          <Link
            href="/buku/baru"
            className="rounded-lg bg-slate-900 px-3.5 py-2 text-white shadow-xs transition hover:bg-blue-950"
          >
            + Tambah Buku
          </Link>
        </div>
      </nav>
    </header>
  );
}