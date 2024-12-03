import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "./components/ModalContext";
import { ThemeProvider } from "./components/theme-provider";

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
          <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
