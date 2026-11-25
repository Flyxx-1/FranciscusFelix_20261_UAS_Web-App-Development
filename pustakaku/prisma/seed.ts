import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const jumlah = await prisma.buku.count();
  if (jumlah > 0) {
    console.log("Data seed sudah ada, dilewati.");
    return;
  }

  await prisma.buku.createMany({
    data: [
      {
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        kategori: "Novel",
        tahunTerbit: 2005,
        stokTotal: 5,
        stokTersedia: 3,
        deskripsi:
          "Kisah perjuangan sepuluh anak dari keluarga miskin di Belitung yang bersekolah di sebuah sekolah Muhammadiyah yang penuh keterbatasan.",
      },
      {
        judul: "Bumi Manusia",
        penulis: "Pramoedya Ananta Toer",
        kategori: "Novel",
        tahunTerbit: 1980,
        stokTotal: 2,
        stokTersedia: 0, // Stok kosong (0/2) untuk uji tampilan merah
        deskripsi:
          "Roman sejarah tetralogi Buru yang mengisahkan perjalanan Minke, seorang pribumi terpelajar di masa kolonial Hindia Belanda.",
      },
      {
        judul: "Fisika Dasar",
        penulis: "David Halliday",
        kategori: "Sains",
        tahunTerbit: 2010,
        stokTotal: 2,
        stokTersedia: 2,
        deskripsi:
          "Buku referensi utama konsep mekanika, termodinamika, elektromagnetisme, dan fisika modern.",
      },
      {
        judul: "Sejarah Nasional Indonesia",
        penulis: "Marwati Djoened Poesponegoro",
        kategori: "Sejarah",
        tahunTerbit: 2008,
        stokTotal: 4,
        stokTersedia: 1,
        deskripsi:
          "Rangkaian kronologis perjalanan sejarah bangsa Indonesia dari masa prasejarah hingga era modern.",
      },
      {
        judul: "Algoritma dan Pemrograman",
        penulis: "Rinaldi Munir",
        kategori: "Teknologi",
        tahunTerbit: 2016,
        stokTotal: 3,
        stokTersedia: 3,
        deskripsi:
          "Panduan dasar logika pemrograman, struktur data, dan perancangan algoritma terstruktur untuk pemula.",
      },
    ],
  });

  console.log("Seed data Pustakaku berhasil dijalankan!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });