import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "./components/ModalContext";

export const metadata: Metadata = {
  title: "William Giammona",
  description: "William Giammona Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
