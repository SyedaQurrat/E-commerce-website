'use client'; 

import { useRouter } from 'next/router';

interface PageHeaderProps {
  pageName: string;
}

const PageHeader = ({ pageName }: PageHeaderProps) => {
  const router = useRouter();
  
  // Handle dynamic page name depending on the URL
  const breadcrumbs = getBreadcrumbs(router.pathname);

  return (
    <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center justify-center relative mt-10">
      {/* Heading Section */}
      <div className="absolute top-[221px] left-[373px]">
        <h1 className="font-josefin-sans text-[36px] leading-[42.19px] text-center text-[#0D0E43]">
          {pageName}
        </h1>
      </div>
      
      {/* Breadcrumb Section */}
      <div className="absolute top-[266px] left-[493px] flex gap-2">
        <span className="text-[#FB2E86]">{breadcrumbs}</span>
      </div>
    </div>
  );
};

// Function to generate breadcrumbs based on the path
const getBreadcrumbs = (path: string) => {
  const pathSegments = path.split('/').filter(Boolean); // Splitting the URL path into segments
  return pathSegments.map((segment, index) => (
    <span key={index}>
      {segment.charAt(0).toUpperCase() + segment.slice(1)}
      {index < pathSegments.length - 1 ? ' / ' : ''}
    </span>
  ));
};

export default PageHeader;
