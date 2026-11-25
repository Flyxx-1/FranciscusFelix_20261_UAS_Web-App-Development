import Link from "next/link";

export default function NotFoundBuku() {
    return (
        <div className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center shadow-xs">
            <h1 className="text-xl font-bold text-slate-900">
                Buku tidak ditemukan
            </h1>
            <p className="mt-2 text-sm text-slate-600">
                Data buku yang Anda cari tidak tersedia atau sudah dihapus.
            </p>
            <Link
                href="/buku"
                className="mt-5 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-950"
            >
                Kembali ke daftar buku
            </Link>
        </div>
    );
}