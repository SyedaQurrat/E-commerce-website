'use client';

import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Logo from '@/components/LogoImg';
import Footer from '@/components/Footer';

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <Heading />

      {/* FAQ Section */}
      <div className="flex-grow bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto bg-white p-6 rounded-lg shadow-md">
          {/* Left Content */}
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h2 className="text-[#1D3178] font-josefin text-[36px] leading-[40px] text-center lg:text-left">
              General Information
            </h2>
            <p className="text-[#1D3178] font-josefin text-[16px] leading-[24px]">
              Eu dictumst cum at sed euismod condimentum?
            </p>
            <p className="text-[#1D3178] font-josefin text-[17px] leading-[24px]">
              Magna bibendum est fermentum eros.
            </p>
            <p className="text-[#A1ABCC] font-josefin text-[16px] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit urna ut lacus facilisis, sit amet.
            </p>
            <p className="text-[#1D3178] font-josefin text-[17px] leading-[24px]">
              Odio muskana hak eris conseekin sceleton?
            </p>
            <p className="text-[#A1ABCC] font-josefin text-[16px] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit urna ut lacus facilisis, sit amet.
            </p>
            <p className="text-[#1D3178] font-josefin text-[17px] leading-[24px]">
              Elit id blandit sabara boi velit gua mara?
            </p>
            <p className="text-[#A1ABCC] font-josefin text-[16px] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit urna ut lacus facilisis, sit amet.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-4 lg:w-1/2 p-6 bg-[#F6F5FF] shadow-lg rounded-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-[45px] border border-[#A4B6C8] rounded px-4 font-lato text-[16px] text-[#A4B6C8]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full h-[45px] border border-[#A4B6C8] rounded px-4 font-lato text-[16px] text-[#A4B6C8]"
            />
            <textarea
              placeholder="Type Your Message"
              className="w-full h-[166px] border border-[#A4B6C8] rounded px-4 font-lato text-[16px] text-[#A4B6C8]"
            ></textarea>
            <button className="w-full h-[44px] bg-[#7E33E0] text-white rounded font-lato font-semibold text-[16px]">
              Send E-mail
            </button>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="bg-white py-4">
        <Logo />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQ;
