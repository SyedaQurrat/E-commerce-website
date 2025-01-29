'use client';

import { useState, useEffect } from 'react';
import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Logo from '@/components/LogoImg';
import Footer from '@/components/Footer';
import Image from 'next/image';

const NotFoundPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleBackToHome = () => {
    if (isClient) {
      window.location.href = '/'; // Redirect to the homepage using browser method
    }
  };

  if (!isClient) {
    return null; // Return nothing until the component is mounted on the client
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />
      {/* Heading */}
      <Heading />

      {/* 404 Page Content */}
      <div className="flex-grow flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <Image
          src="/media-files/404.png"
          alt="404 Image"
          width={600}
          height={600}
          className="w-[459px] h-[auto] mb-6"
        />
        <h1 className="font-josefin text-[24px] leading-[28.13px] text-[#152970] mb-6">
          Oops! The page you requested was not found!
        </h1>
        <button
          onClick={handleBackToHome}
          className="w-[165px] h-[44px] bg-pink-500 text-white rounded-[3px] font-lato text-[16px] flex items-center justify-center"
        >
          Back to Home
        </button>
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

export default NotFoundPage;
