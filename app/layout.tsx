import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acme - Your Go-To Next.js Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased`}>{children}</body>
    </html>
  );
}
