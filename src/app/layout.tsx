"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="w-screen overflow-x-hidden">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
};
