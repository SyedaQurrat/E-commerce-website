'use client';

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const sofas = [
  "Stylish Golden Metal Legs Mint Blue Fabric Velvet Sofa Leisure Armchair",
  "Matilda Velvet Chair – Pink",
  "Luxury Flower Shell Sofa Chair",
  "Diondre Chair - Tuft Button - Acrylic Legs",
  "Leisure Sofa Chair",
];

const HeroSection = () => {
  const [sofaIndex, setSofaIndex] = useState(0);
  const [sofaImageUrl, setSofaImageUrl] = useState<string | null>(null);
  const [lampImageUrl, setLampImageUrl] = useState<string | null>(null);
  const sofaImageRef = useRef<HTMLImageElement | null>(null);
  const lampImageRef = useRef<HTMLImageElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lampAnimated = useRef(false);

  const fetchImageFromSanity = async (name: string, setImageUrl: (url: string | null) => void) => {
    try {
      const query = encodeURIComponent(
        `*[_type == "product" && name == "${name}"]{ "imageUrl": image.asset->url }`
      );
      const projectId = "9074oi3u";
      const dataset = "production";
      const apiVersion = "2023-01-01";
      const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      if (data?.result?.length > 0 && data.result[0]?.imageUrl) {
        setImageUrl(data.result[0].imageUrl);
      } else {
        console.warn("Image not found or empty result:", data);
        setImageUrl(null);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      setImageUrl(null);
    }
  };

  useEffect(() => {
    fetchImageFromSanity(sofas[sofaIndex], setSofaImageUrl);
    fetchImageFromSanity("Hero Lamp", setLampImageUrl);
  }, [sofaIndex]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSofaIndex((prevIndex) => (prevIndex + 1) % sofas.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (sofaImageRef.current) {
      gsap.fromTo(
        sofaImageRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      );
    }

    if (lampImageRef.current && !lampAnimated.current) {
      gsap.fromTo(
        lampImageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      );
      lampAnimated.current = true;
    }
  }, [sofaImageUrl]);

  return (
    <div className="w-full bg-[#F2F0FF] flex flex-col lg:flex-row justify-between items-center py-16 px-6 sm:px-8 lg:px-20">
      {/* First Div - Hero Lamp Image */}
      <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[387px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[387px] bg-[#F2F0FF]">
        {lampImageUrl && (
          <Image
            ref={lampImageRef}
            src={lampImageUrl}
            alt="Hero Lamp"
            width={387}
            height={387}
            className="object-contain"
          />
        )}
      </div>

      {/* Second Div - Content */}
      <div className="w-full lg:w-[644px] text-center lg:text-left mt-8 lg:mt-0">
        <h3 className="font-lato font-bold text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] text-[#FB2E86]">
          Best Furniture For Your Castle....
        </h3>
        <h1 className="font-josefin text-[36px] sm:text-[42px] md:text-[48px] lg:text-[53px] leading-[48px] sm:leading-[60px] md:leading-[70px] lg:leading-[81.98px] text-[#000000] mt-4">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="font-lato text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] text-[#8A8FB9] mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper eros nec purus feugiat, eget laoreet justo tempus.
        </p>
        <Link href="/shop">
          <button className="w-[140px] sm:w-[163px] h-[45px] sm:h-[50px] bg-[#FB2E86] text-white font-bold text-[14px] sm:text-[16px] rounded-[2px] mt-8">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Third Div - Sofa Image with Animation */}
      <div className="relative w-[400px] sm:w-[500px] md:w-[600px] lg:w-[706px] mt-8 lg:mt-0  overflow-hidden">
        {sofaImageUrl && (
          <Image
            ref={sofaImageRef}
            src={sofaImageUrl}
            alt="Sofa Image"
            width={650}
            height={3500}
            className="object-contain rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default HeroSection;




