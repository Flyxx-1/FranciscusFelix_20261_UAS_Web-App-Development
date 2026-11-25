"use client";

import { useActionState } from "react";
import Link from "next/link";
import { simpanBuku, type FormState } from "@/app/buku/actions";

const stateAwal: FormState = { sukses: false, pesan: "" };

export default function FormBuku() {
  const [state, formAction, pending] = useActionState(simpanBuku, stateAwal);

  return (
    <form
      action={formAction}
      className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
    >
      {state.pesan && !state.sukses && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700">
          {state.pesan}
        </div>
      )}

      {/* Judul */}
      <div>
        <label htmlFor="judul" className="block text-sm font-medium text-slate-700">
          Judul <span className="text-red-600">*</span>
        </label>
        <input
          id="judul"
          name="judul"
          type="text"
          defaultValue={state.values?.judul}
          placeholder="Judul buku"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
        />
        {state.galat?.judul && (
          <p className="mt-1 text-xs text-red-600">{state.galat.judul}</p>
        )}
      </div>

      {/* Penulis */}
      <div>
        <label htmlFor="penulis" className="block text-sm font-medium text-slate-700">
          Penulis <span className="text-red-600">*</span>
        </label>
        <input
          id="penulis"
          name="penulis"
          type="text"
          defaultValue={state.values?.penulis}
          placeholder="Nama penulis"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
        />
        {state.galat?.penulis && (
          <p className="mt-1 text-xs text-red-600">{state.galat.penulis}</p>
        )}
      </div>

      {/* Kategori */}
      <div>
        <label htmlFor="kategori" className="block text-sm font-medium text-slate-700">
          Kategori <span className="text-red-600">*</span>
        </label>
        <select
          id="kategori"
          name="kategori"
          defaultValue={state.values?.kategori ?? ""}
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
        >
          <option value="" disabled>
            Pilih kategori
          </option>
          <option value="Novel">Novel</option>
          <option value="Sains">Sains</option>
          <option value="Sejarah">Sejarah</option>
          <option value="Teknologi">Teknologi</option>
          <option value="Pelajaran">Pelajaran</option>
          <option value="Lainnya">Lainnya</option>
        </select>
        {state.galat?.kategori && (
          <p className="mt-1 text-xs text-red-600">{state.galat.kategori}</p>
        )}
      </div>

      {/* Tahun Terbit & Jumlah Stok */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="tahunTerbit"
            className="block text-sm font-medium text-slate-700"
          >
            Tahun terbit
          </label>
          <input
            id="tahunTerbit"
            name="tahunTerbit"
            type="number"
            defaultValue={state.values?.tahunTerbit}
            placeholder="2005"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
          />
          {state.galat?.tahunTerbit && (
            <p className="mt-1 text-xs text-red-600">{state.galat.tahunTerbit}</p>
          )}
        </div>

        <div>
          <label htmlFor="stok" className="block text-sm font-medium text-slate-700">
            Jumlah stok <span className="text-red-600">*</span>
          </label>
          <input
            id="stok"
            name="stok"
            type="number"
            min={0}
            defaultValue={state.values?.stok}
            placeholder="5"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
          />
          {state.galat?.stok && (
            <p className="mt-1 text-xs text-red-600">{state.galat.stok}</p>
          )}
        </div>
      </div>

      {/* Deskripsi */}
      <div>
        <label
          htmlFor="deskripsi"
          className="block text-sm font-medium text-slate-700"
        >
          Deskripsi
        </label>
        <textarea
          id="deskripsi"
          name="deskripsi"
          rows={3}
          defaultValue={state.values?.deskripsi}
          placeholder="Deskripsi buku"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
        />
      </div>

      {/* Tombol Aksi */}
      <div className="flex items-center justify-between pt-2">
        <Link
          href="/buku"
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Batal
        </Link>

        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-slate-800 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-900 disabled:opacity-50"
        >
          {pending ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </form>
  );
}