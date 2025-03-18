import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/app/components/ModalContext";
import { ThemeProvider } from "@/app/components/theme-provider";
import BackgroundShapes from "@/app/components/BackgroundShapes";
import Modal from "@/app/components/Modal";

export const metadata: Metadata = {
  title: "William Giammona",
  description: "William Giammona Website",
  icons: {
    icon: "/images/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <BackgroundShapes />
            <Modal />
            {children}
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
