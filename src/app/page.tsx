import DiscountItem from "@/components/DiscountItem";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import LatestProducts from "@/components/LatestProducts";
import LattestBlog from "@/components/LattestBlog";
import LogoImg from "@/components/LogoImg";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/NewLetter";
import ShopexOffer from "@/components/ShopexOffer";
import TopCategories from "@/components/TopCategories";
import TrendingProducts from "@/components/Trendingproducts";
import UniqueSection from "@/components/UniqueSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      {/* <Heading/> */}
      <HeroSection/>
      <FeatureSection/>
      <LatestProducts/>
      <ShopexOffer/>
      <UniqueSection/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategories/>
      <Newsletter/>
      <LogoImg/>
      <LattestBlog/>
      <Footer/>

    </div>
  );
}

