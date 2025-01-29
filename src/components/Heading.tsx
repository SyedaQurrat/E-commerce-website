'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Heading = () => {
  const pathname = usePathname();
  const [pageName, setPageName] = useState('');

  useEffect(() => {
    // Determine the page name based on the URL
    switch (pathname) {
      case '/shop-girdDefault':
        setPageName('Gird Default');
        break;
      case '/shop':
        setPageName('Shop');
        break;
      case '/shopList':
        setPageName('Shop List');
        break;
      case '/shop-left-sidebar':
        setPageName('Shop Left Sidebar');
        break;
      case '/products-detail':
        setPageName('Product Detail');
        break;
      case '/shoping-curt':
        setPageName('Shoping Cart');
        break;
      case '/hekto-demo':
        setPageName('Hekto Demo');
        break;
      case '/my-account':
        setPageName('My Account');
        break;
      case '/order-completed':
        setPageName('Order Completed');
        break;
      case '/blog-page':
        setPageName('Blog Page');
        break;
      case '/single-blog':
        setPageName('Single blog');
        break;
      case '/about-us':
        setPageName('About us');
        break;
      case '/contact-us':
        setPageName('Contact Us');
        break;
      case '/404-notFound':
        setPageName('404 Not Found');
        break;
      case '/faq':
        setPageName('FAQ');
        break;
      default:
        setPageName('');
        break;
    }
  }, [pathname]);

  // If pageName is empty, do not render Heading for Home page (Landing Page)
  if (!pageName) return null;

  return (
    <div className="w-full h-auto sm:h-[286px] bg-[#F6F5FF] flex flex-col items-center justify-center sm:relative sm:top-2">
      {/* Page Name */}
      <div className="text-[#101750] font-josefin font-bold text-[24px] sm:text-[36px] leading-[1.2] text-center">
        {pageName}
      </div>

      {/* Breadcrumb Section */}
      <div className="flex space-x-2 mt-2 sm:mt-4 text-[14px] sm:text-[16px] font-lato font-medium">
        <span className="text-[#000000]">Home.</span>
        <span className="text-[#000000]">Pages.</span>
        <span className="text-[#FB2E86]">{pageName}</span>
      </div>
    </div>
  );
};

export default Heading;
