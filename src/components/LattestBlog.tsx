'use client';
import Image from 'next/image';
import { FaPenNib } from "react-icons/fa"; // Import React Icon
import { FaRegCalendarAlt } from "react-icons/fa"; // Import Calendar Icon

export default function LattestBlog() {
  // Sample data for cards
  const blogPosts = [
    {
      imgSrc: '/images/blog-1.jpg',
      author: 'SaberAli',
      date: '21 August, 2020',
      title: 'Top Essential Trends in 2021',
      description: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    },
    {
      imgSrc: '/images/blog-2.jpg',
      author: 'Surfauxion',
      date: '21 August, 2020',
      title: 'Top Essential Trends in 2021',
      description: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    },
    {
      imgSrc: '/images/blog-3.jpg',
      author: 'SaberAli',
      date: '21 August, 2020',
      title: 'Top Essential Trends in 2021',
      description: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    },
  ];

  return (
    <section className="mt-[70px]">
      {/* Caption Title */}
      <h2 className="text-center font-josefin text-[42px] leading-[49.22px] text-[#151875] mb-10">
        Latest Blog
      </h2>

      {/* Blog Posts Container */}
      <div className="flex flex-wrap justify-center gap-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="w-[370px] h-[493px] border border-gray-200 rounded-lg shadow-md"
          >
            {/* Image Section */}
            <div className="w-full h-[255px]">
              <Image
                src={post.imgSrc}
                alt="Blog Post Image"
                width={370}
                height={255}
                className="rounded-t-lg object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              {/* Author and Date */}
              <div className="flex items-center mb-4">
                {/* Pen Icon */}
                <FaPenNib className="text-[#FB2E86] w-[11.33px] h-[11.33px]" />
                <p className="ml-2 font-josefin text-[14px] text-[#151875]">{post.author}</p>
                {/* Calendar Icon */}
                <FaRegCalendarAlt className="ml-6 text-[#151875] w-[11px] h-[11px]" />
                <p className="ml-2 font-josefin text-[14px] text-[#151875]">{post.date}</p>
              </div>

              {/* Title */}
              <h3 className="font-josefin text-[18px] leading-[21.09px] text-[#000000] mb-4">
                {post.title}
              </h3>

              {/* Description */}
              <p className="font-lato text-[16px] leading-[30px] text-[#72718F] mb-6">
                {post.description}
              </p>

              {/* Read More */}
              <a
                href="#"
                className="font-lato text-[16px] leading-[30px] text-[#151875] underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
