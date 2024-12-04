import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/app/components/ModalContext";
import { ThemeProvider } from "@/app/components/theme-provider";
import BackgroundShapes from "@/app/components/BackgroundShapes";

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
            {children}
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
