import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function DaftarBukuPage({
  searchParams,
}: {
  searchParams: Promise<{ cari?: string | string[] }>;
}) {
  const { cari: nilaiCari } = await searchParams;
  const cari = (Array.isArray(nilaiCari) ? nilaiCari[0] : nilaiCari)?.trim();

  const daftarBuku = await prisma.buku.findMany({
    where: cari
      ? {
          OR: [
            { judul: { contains: cari } },
            { penulis: { contains: cari } },
          ],
        }
      : undefined,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      {/* Header + Tombol Tambah */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">Daftar buku</h1>
        <Link
          href="/buku/baru"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-950"
        >
          + Tambah buku
        </Link>
      </div>

      {/* Form Pencarian */}
      <form action="/buku" method="get" className="flex gap-2">
        <input
          name="cari"
          defaultValue={cari}
          placeholder="Cari judul atau penulis"
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-950"
        >
          Cari
        </button>
      </form>

      {/* Tabel Daftar Buku */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">No</th>
              <th className="px-4 py-3 font-medium">Judul</th>
              <th className="px-4 py-3 font-medium">Penulis</th>
              <th className="px-4 py-3 font-medium">Kategori</th>
              <th className="px-4 py-3 font-medium">Stok</th>
              <th className="px-4 py-3 text-right font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {daftarBuku.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-8 text-center text-slate-500"
                >
                  {cari
                    ? `Tidak ada buku yang cocok dengan "${cari}".`
                    : "Belum ada data buku."}
                </td>
              </tr>
            ) : (
              daftarBuku.map((buku, index) => {
                const stokKosong = buku.stokTersedia === 0;
                return (
                  <tr key={buku.id} className="hover:bg-slate-50/70">
                    <td className="px-4 py-3 text-slate-500">{index + 1}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {buku.judul}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{buku.penulis}</td>
                    <td className="px-4 py-3 text-slate-600">
                      {buku.kategori}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          stokKosong
                            ? "bg-red-100 text-red-700"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {buku.stokTersedia}/{buku.stokTotal}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/buku/${buku.id}`}
                        className="inline-block rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                      >
                        Detail
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}