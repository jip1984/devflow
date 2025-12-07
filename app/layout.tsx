import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A better version of Stack Overflow.",
};

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <Toaster position="top-center" richColors/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      </SessionProvider>
    </html>
  );
}
