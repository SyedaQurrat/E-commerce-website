'use client';

import Header from '@/app/Header/page';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Footer from '@/components/Footer';
import Img from 'next/image';

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F5FF]">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <Heading />

      <div className="flex flex-col px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1191px] mx-auto mt-[31px]">
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="flex flex-col gap-10">
              {/* Information About Us */}
              <div>
                <h2 className="font-josefin text-[36px] leading-[48px] text-[#151875] mb-4">
                  Information About Us
                </h2>
                <p className="font-lato font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim tincidunt volutpat.
                </p>
                <div className="flex gap-2">
                  <div className="w-[25px] h-[25px] bg-[#6C63FF] rounded-full"></div>
                  <div className="w-[25px] h-[25px] bg-[#FB2E86] rounded-full"></div>
                  <div className="w-[25px] h-[25px] bg-[#8A8FB9] rounded-full"></div>
                </div>
              </div>

              {/* Get in Touch */}
              <div>
                <h2 className="font-josefin text-[36px] leading-[48px] text-[#151875] mb-4">
                  Get in Touch
                </h2>
                <p className="font-lato font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit urna ut lacus facilisis, sit amet.
                </p>
                <div className="w-[534px] h-[414px] bg-white border border-[#A4B6C8] rounded-[3px] p-6 flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-[255px] h-[45px] border border-[#A4B6C8] rounded-[3px] px-4 font-lato font-normal text-[16px] leading-[19.2px] text-[#A4B6C8]"
                  />
                  <input
                    type="email"
                    placeholder="Your E-mail"
                    className="w-[255px] h-[45px] border border-[#A4B6C8] rounded-[3px] px-4 font-lato font-normal text-[16px] leading-[19.2px] text-[#A4B6C8]"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-[500px] h-[45px] border border-[#A4B6C8] rounded-[3px] px-4 font-lato font-normal text-[16px] leading-[19.2px] text-[#A4B6C8]"
                  />
                  <textarea
                    placeholder="Type Your Message"
                    className="w-[500px] h-[166px] border border-[#A4B6C8] rounded-[3px] p-4 font-lato font-normal text-[16px] leading-[19.2px] text-[#A4B6C8]"
                  ></textarea>
                  <button className="w-[157px] h-[44px] bg-[#FB2E86]  text-white rounded-[3px] font-lato font-semibold text-[16px]">
                    Send Email
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="font-josefin text-[36px] leading-[48px] text-[#151875] mb-4">
                Contact Way
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Contact Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] bg-[#6C63FF] rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-lato font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]">
                      Tel: 877-67-88-99
                    </p>
                    <p className="font-lato font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]">
                      E-Mail: shop@store.com
                    </p>
                  </div>
                </div>

                {/* Contact Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] bg-[#FFB265] rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-lato font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]">
                      20 Margaret st, London
                    </p>
                    <p className="font-lato font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]">
                      Great Britain, 3NM98-LK
                    </p>
                  </div>
                </div>

                {/* Contact Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] bg-[#FB2E86] rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-lato font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]">
                      Support Forum
                    </p>
                    <p className="font-lato font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]">
                      For over 24hr
                    </p>
                  </div>
                </div>

                {/* Contact Item 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] bg-[#1BE982] rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-lato font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]">
                      Free standard shipping
                    </p>
                    <p className="font-lato font-semibold text-[16px] leading-[25.6px] text-[#8A8FB9]">
                      on all orders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-[400px] h-[400px] mx-auto">
                <Img
                  src="/media-files/contact.png"
                  alt="Contact"
                  width={600}
                  height={600}
                  className="rounded-[3px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
