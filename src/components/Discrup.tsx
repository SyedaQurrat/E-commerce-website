import Link from 'next/link';

const ComponentPage = () => {
  return (
    <div className="w-[1920px] h-[649px] bg-[#F9F8FE] relative">
      {/* Description Section */}
      <Link href="/description">
        <span className="absolute top-[1279px] left-[376px] w-[125px] h-[24px] underline decoration-solid decoration-[#151875] text-[24px] leading-[28.13px] font-josefinSans">
          Description
        </span>
      </Link>

      {/* Additional Info */}
      <Link href="/additional-info">
        <span className="absolute top-[1281px] left-[586px] w-[174px] h-[24px] bg-[#151875] text-[24px] leading-[28.13px] font-josefinSans">
          Additional Info
        </span>
      </Link>

      {/* Reviews */}
      <Link href="/reviews">
        <span className="absolute top-[1283px] left-[976px] w-[66px] h-[24px] bg-[#151875] text-[24px] leading-[28.13px] font-josefinSans">
          Reviews
        </span>
      </Link>

      {/* Video */}
      <Link href="/video">
        <span className="absolute top-[1364px] left-[371px] w-[208px] h-[22px] bg-[#151875] text-[24px] leading-[28.13px] font-josefinSans"> 
          Video
          </span>
      </Link>

      {/* Content Section */}
      <div className="absolute top-[1400px] left-[374px] w-[1153px] h-[87px] bg-[#151875] text-[22px] leading-[25.78px] font-josefinSans">
        Varius tempor. Aliquam dis vulputate integer sagittis...
      </div>

      {/* More Details */}
      <div className="absolute top-[1523px] left-[371px] w-[130px] h-[22px] bg-[#A9ACC6] text-[16px] leading-[29px] font-josefinSans">
        More Details
      </div>

      {/* Arrow Icon Example */}
      <div className="absolute top-[1563px] left-[397px] w-[24px] h-[24px] transform -rotate-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-[#151875]"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default ComponentPage;
