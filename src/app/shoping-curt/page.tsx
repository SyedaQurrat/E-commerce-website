'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';

const shopingCart= () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <Heading />
      <div className='flex-grow bg-white py-10 px-4 sm:px-6 lg:px-8'>

      </div>

    

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default shopingCart;
