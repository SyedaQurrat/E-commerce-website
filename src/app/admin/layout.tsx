'use client';

// export default  function Layout ({ children }) {
//     return <>{ children }</>;
// }


import { ReactNode } from "react";
import Sidebar from "@/app/admin/componenets/Sidebar";
import Header from "@/app/admin/componenets/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex">
      <Sidebar />
      <section className="flex-1 flex flex-col">
        <Header />
        <section className="flex-1 bg-[#eff3f4]">{children}</section>
      </section>
    </main>
  );
}

