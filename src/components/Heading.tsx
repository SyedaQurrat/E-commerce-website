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
    <div
      className="w-[1250px] h-[286px] bg-[#F6F5FF] relative"
      style={{ top: '10px' }}
    >
      <div
        className="absolute w-[400px] h-[36px] text-[#101750] font-josefin font-bold text-[36px] leading-[42.19px]"
        style={{ top: '100px', left: '200px', textAlign: 'center' }}
      >
        {pageName}
      </div>
      <div
        className="absolute w-[43px] h-[19px] text-[#000000] font-lato font-medium text-[16px] leading-[19.2px]"
        style={{ top: '150px', left: '310px', textAlign: 'center' }}
      >
        Home.
      </div>
      <div
        className="absolute w-[42px] h-[19px] text-[#000000] font-lato font-medium text-[16px] leading-[19.2px]"
        style={{ top: '150px', left: '360px', textAlign: 'center' }}
      >
        Pages.
      </div>
      <div
        className="absolute w-auto h-[19px] text-[#FB2E86] font-lato font-medium text-[16px] leading-[19.2px]"
        style={{ top: '150px', left: '410px', textAlign: 'center' }}
      >
        {pageName}
      </div>
    </div>
  );
};

export default Heading;
