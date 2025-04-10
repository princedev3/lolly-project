import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster as SoonerToast } from "@/components/ui/sonner";
import LayoutProvider from "@/static-data/layout-provider";
import { auth } from "@/static-data/auth";
import AuthProvider from "@/static-data/auth-provider";
import SessionProvider from "@/static-data/session-provider";
import CartPopup from "@/static-data/cartpopup";
import BackToTop from "@/components/navbar/back-to-top";
import {} from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "LOLLYS",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`${roboto.className}  antialiased`}>
          <AuthProvider>
            <SessionProvider>
              <LayoutProvider>{children}</LayoutProvider>
              <SoonerToast />
              <BackToTop />
            </SessionProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
