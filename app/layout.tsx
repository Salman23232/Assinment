import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
      >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header/>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
