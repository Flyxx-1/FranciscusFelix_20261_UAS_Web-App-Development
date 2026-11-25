"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export type FormState = {
    sukses: boolean;
    pesan: string;
    galat?: {
        judul?: string;
        penulis?: string;
        kategori?: string;
        tahunTerbit?: string;
        stok?: string;
    };
    values?: {
        judul: string;
        penulis: string;
        kategori: string;
        tahunTerbit: string;
        stok: string;
        deskripsi: string;
    };
};

export async function simpanBuku(
    _prev: FormState,
    formData: FormData
): Promise<FormState> {
    const judul = String(formData.get("judul") ?? "").trim();
    const penulis = String(formData.get("penulis") ?? "").trim();
    const kategori = String(formData.get("kategori") ?? "").trim();
    const tahunStr = String(formData.get("tahunTerbit") ?? "").trim();
    const stokStr = String(formData.get("stok") ?? "").trim();
    const deskripsi = String(formData.get("deskripsi") ?? "").trim();

    const values = {
        judul,
        penulis,
        kategori,
        tahunTerbit: tahunStr,
        stok: stokStr,
        deskripsi,
    };

    // Validasi input
    const galat: NonNullable<FormState["galat"]> = {};
    if (!judul) galat.judul = "Judul wajib diisi";
    if (!penulis) galat.penulis = "Penulis wajib diisi";
    if (!kategori) galat.kategori = "Kategori wajib dipilih";

    let tahunTerbit: number | null = null;
    if (tahunStr) {
        const t = Number(tahunStr);
        if (!Number.isInteger(t) || t < 1000 || t > 2100) {
            galat.tahunTerbit = "Tahun terbit tidak valid";
        } else {
            tahunTerbit = t;
        }
    }

    const stok = Number(stokStr);
    if (!stokStr || !Number.isInteger(stok) || stok < 0) {
        galat.stok = "Jumlah stok harus angka minimal 0";
    }

    if (Object.keys(galat).length > 0) {
        return {
            sukses: false,
            pesan: "Periksa kembali isian form Anda.",
            galat,
            values,
        };
    }

    // Simpan ke database SQLite
    try {
        await prisma.buku.create({
            data: {
                judul,
                penulis,
                kategori,
                tahunTerbit,
                stokTotal: stok,
                stokTersedia: stok,
                deskripsi: deskripsi || null,
            },
        });
    } catch {
        return {
            sukses: false,
            pesan: "Gagal menyimpan data buku ke database.",
            values,
        };
    }

    revalidatePath("/buku");
    redirect("/buku");
}