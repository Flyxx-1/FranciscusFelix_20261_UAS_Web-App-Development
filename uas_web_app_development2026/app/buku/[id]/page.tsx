// app/buku/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function DetailBukuPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const nomorId = Number(id);
    if (!Number.isInteger(nomorId) || nomorId <= 0) {
        notFound();
    }

    const buku = await prisma.buku.findUnique({
        where: { id: nomorId },
    });

    if (!buku) {
        notFound();
    }

    const stokKosong = buku.stokTersedia === 0;

    return (
        <div className="mx-auto max-w-2xl space-y-6">
            <Link
                href="/buku"
                className="inline-flex items-center text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
                &larr; Kembali ke daftar
            </Link>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row">
                    {/* Placeholder Sampul Buku */}
                    <div className="flex h-44 w-32 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-xs font-medium text-slate-400">
                        Sampul
                    </div>

                    {/* Informasi Utama */}
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold text-slate-900">{buku.judul}</h1>
                        <p className="text-sm text-slate-600">
                            Penulis:{" "}
                            <span className="font-medium text-slate-900">{buku.penulis}</span>
                        </p>

                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-700">
                                Kategori: {buku.kategori}
                            </span>
                            {buku.tahunTerbit && (
                                <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-700">
                                    Tahun: {buku.tahunTerbit}
                                </span>
                            )}
                        </div>

                        <p
                            className={`text-sm font-medium ${stokKosong ? "text-red-600" : "text-slate-700"
                                }`}
                        >
                            Stok: {buku.stokTersedia} dari {buku.stokTotal} tersedia
                        </p>
                    </div>
                </div>

                {/* Deskripsi */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                    <h2 className="text-sm font-semibold text-slate-900">Deskripsi</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {buku.deskripsi || "Tidak ada deskripsi untuk buku ini."}
                    </p>
                </div>
            </div>
        </div>
    );
}