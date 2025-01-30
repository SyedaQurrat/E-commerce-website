// import { ReactNode } from "react";
// import Header from "@/app/Header/page";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Heading from "@/components/Heading";
// import LogoImg from "@/components/LogoImg";

// interface ProductsLayoutProps {
//   children: ReactNode; // Define the children prop type here
// }

// export default function ProductsLayout({ children }: ProductsLayoutProps) {
//   return (
//     <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
//       <Header />
//       <Navbar />
//       <Heading />
//       <main className="flex-grow">{children}</main>
//       <LogoImg />
//       <Footer />
//     </div>
//   );
// }



export default function ProductsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">All Products</h1>
      <p className="text-center text-gray-600">Select a category to view products.</p>
    </div>
  );
}
