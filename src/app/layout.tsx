import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Ubuntu } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
// import AuthProvider from "@/components/AuthProvider/AuthProvider";

// import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
// const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Connect",
  description: "This is a social media app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="">
            {/* <Navbar /> */}
            {children}
            {/* <Footer /> */}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
