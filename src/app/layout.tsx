import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamoz | Minimal Project Management",
  description: "A minimal, beginner-friendly project management tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 ml-64">
            <Topbar />
            <main className="mt-16 p-8 min-h-[calc(100vh-64px)] bg-[#f8fafc]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
