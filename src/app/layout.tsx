import { PageHead } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApiScheduledEventsReturn } from "@/mocks/api-scheduled-events-return";
import { setSessionStorage } from "@/utils/storage/session-storage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageHead>Agenda de Churras</PageHead>
        <main className="container mx-auto -m-12">{children}</main>
      </body>
    </html>
  );
}
