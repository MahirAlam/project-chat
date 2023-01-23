"use client";
import Script from "next/script";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "../firebase";
import "./globals.css";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading, error] = useAuthState(Auth);

  return (
    <html className="dark">
      <head />
      <body className="bg-gray-100 font-sans">
        {loading ? <Loading /> : children}
        <Script src="./preline.js" strategy="beforeInteractive"></Script>
      </body>
    </html>
  );
}
