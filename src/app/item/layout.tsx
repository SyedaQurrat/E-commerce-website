import { ReactNode } from "react";
import Header from "@/app/Header/page";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import LogoImg from "@/components/LogoImg";

interface LayoutProps {
  children: ReactNode;
}

export default function ProductsLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      <Header />
      <Navbar />
      <Heading />
      <main className="flex-grow">{children}</main>
      <LogoImg />
      <Footer />
    </div>
  );
}
