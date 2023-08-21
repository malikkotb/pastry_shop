import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pastry Shop",
  description: "Demo online e-commerce store - best of 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"min-h-screen flex flex-col relative " + inter.className}>
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="">FOOTER</footer>
      </body>
    </html>
  );
}
