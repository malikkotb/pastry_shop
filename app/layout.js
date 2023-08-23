import Header from "@/components/Header";
import "./globals.css";
import { Alice } from "next/font/google";
import Footer from "@/components/Footer";

const alice = Alice({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: "Pastry Shop",
  description: "Demo online e-commerce store - best of 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"min-h-screen flex flex-col relative " + alice.className}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <div id="portal"></div>
      </body>
    </html>
  );
}
