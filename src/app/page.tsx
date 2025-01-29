import DiscountItem from "@/components/LandingPage/DiscountItem";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/app/Header/page";
import Heading from "@/components/Heading";
import HeroSection from "@/components/LandingPage/HeroSection";
import LatestProducts from "@/components/LandingPage/LatestProducts";
import LattestBlog from "@/components/LandingPage/LattestBlog";
import LogoImg from "@/components/LogoImg";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/LandingPage/NewLetter";
import ShopexOffer from "@/components/LandingPage/ShopexOffer";
import TopCategories from "@/components/LandingPage/TopCategories";
import TrendingProducts from "@/components/LandingPage/Trendingproducts";
import UniqueSection from "@/components/LandingPage/UniqueSection";
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

