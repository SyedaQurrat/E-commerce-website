'use client';
import Card from '@/components/Card-1';

export default function FeatureSection() {
  const cards = [
    {
      imgSrc: '/media-files/Cantilever-chair-1.png',
      title: 'Cantilever Chair',
      code: 'Code - Y523201',
      price: '$42.00',
    },
    {
      imgSrc: '/media-files/Cantilever-chair-2.png',
      title: 'Cantilever Chair',
      code: 'Code - Y523201',
      price: '$42.00',
    },
    {
      imgSrc: '/media-files/Cantilever-chair-3.png',
      title: 'Cantilever Chair',
      code: 'Code - Y523201',
      price: '$42.00',
    },
    {
      imgSrc: '/media-files/Cantilever-chair-4.png',
      title: 'Cantilever Chair',
      code: 'Code - Y523201',
      price: '$42.00',
    },
  ];

  return (
    <section className="mt-[50px]">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="font-josefin text-[#1A0B5B] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[40px] md:leading-[45px] lg:leading-[49.22px]">
          Featured Products
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap gap-6 justify-center mt-[40px]">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
