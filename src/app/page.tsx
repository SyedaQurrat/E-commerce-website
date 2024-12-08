import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestProducts from "@/components/LatestProducts";
import Navbar from "@/components/Navbar";
import ShopexOffer from "@/components/ShopexOffer";
import TrendingProducts from "@/components/Trendingproducts";
import UniqueSection from "@/components/UniqueSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <LatestProducts/>
      <ShopexOffer/>
      <UniqueSection/>
      <TrendingProducts/>
      <Footer/>

    </div>
  );
}

