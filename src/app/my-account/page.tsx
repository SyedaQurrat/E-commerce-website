'use client';
import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Logo from '@/components/LogoImg';
import Footer from '@/components/Footer';

const MyAccountPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <Heading />

      {/* Login Section Parent */}
      <div className="flex-grow bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[544px] mx-auto border border-[#C2C5E1] bg-white rounded-md shadow-md px-6 py-8">
          {/* Login Title */}
          <div className="text-[#000000] font-josefin text-[24px] sm:text-[28px] lg:text-[32px] leading-[37.5px] text-center">
            Login
          </div>

          {/* Login Description */}
          <div className="text-[#9096B2] font-lato font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[20.4px] text-center mt-4">
            Please login using account detail below.
          </div>

          {/* Email Placeholder */}
          <input
            type="email"
            placeholder="Email Address"
            className="block w-full h-[52px] mt-6 rounded-[2px] border border-[#C2C5E1] bg-white px-4 text-[#9096B2] font-lato text-[14px] sm:text-[16px]"
          />

          {/* Password Placeholder */}
          <input
            type="password"
            placeholder="Password"
            className="block w-full h-[52px] mt-4 rounded-[2px] border border-[#C2C5E1] bg-white px-4 text-[#9096B2] font-lato text-[14px] sm:text-[16px]"
          />

          {/* Forget Password */}
          <div className="text-[#9096B2] font-lato text-[14px] sm:text-[16px] leading-[20.4px] text-right mt-2 cursor-pointer">
            Forget my password
          </div>

          {/* Login Button */}
          <button className="block w-full h-[52px] mt-4 rounded-[2px] bg-[#FB2E86] text-white font-lato font-medium text-[14px] sm:text-[16px]">
            Login
          </button>

          {/* Don't Have Account */}
          <div className="text-center mt-6 text-[#9096B2] font-lato text-[14px] sm:text-[16px]">
            Don&#39;t have an account?
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

export default MyAccountPage;
