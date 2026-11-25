// src/app/layout.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pustakaku — Perpustakaan SMA Prasetiya Mulya",
  description: "Aplikasi pencatatan dan katalog buku perpustakaan digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}