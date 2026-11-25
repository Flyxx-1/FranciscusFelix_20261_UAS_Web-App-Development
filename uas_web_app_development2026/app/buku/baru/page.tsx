import FormBuku from "@/components/FormBuku";

export default function TambahBukuPage() {
    return (
        <div className="mx-auto max-w-xl space-y-5">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Tambah buku baru</h1>
                <p className="mt-1 text-sm text-slate-600">
                    Lengkapi informasi buku untuk ditambahkan ke katalog perpustakaan.
                </p>
            </div>

            <FormBuku />
        </div>
    );
}