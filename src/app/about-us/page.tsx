'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';
import ShopexOffer from '@/components/ShopexOffer';
import Image from 'next/image';

const Aboutus = () => { 
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <Heading />

      {/* Hero Section */}
      <div className="w-full bg-white flex flex-col md:flex-row justify-between items-center py-10 px-6 sm:px-8 lg:px-20">
        {/* Hero Image Section */}
        <div className="relative w-full sm:w-[552px] h-auto bg-[#2B3CAB] rounded-lg overflow-hidden flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="/media-files/Business-Img.jpg"
            alt="Hero Image"
            width={706}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="w-full mt-8 md:mt-0 md:ml-8 lg:ml-16 text-left">
          <h1 className="font-josefin text-[24px] sm:text-[32px] lg:text-[53px] leading-[1.2] text-[#000000]">
            Know About Our Ecommerce Business, History
          </h1>
          <p className="mt-4 text-[#8A8FB9] font-lato text-[14px] sm:text-[16px] leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis 
            aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. 
            Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>

          {/* Button Section */}
          <div className="mt-6">
            <button className="w-full sm:w-[163px] h-[50px] bg-[#FB2E86] text-white font-bold text-[16px] rounded-[2px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Shopex Offer */}
      <ShopexOffer />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Aboutus;
