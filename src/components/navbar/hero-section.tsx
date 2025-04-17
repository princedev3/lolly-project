import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-5 bg-[#16181E] h-full  py-12 items-center">
      {/* Text Section */}
      <div className="flex justify-end">
        <div className="flex flex-col gap-6 text-white md:pl-5 ">
          <div className="text-[32px] text-center md:text-left md:text-[50px] font-light leading-tight">
            <p>Limited Edition of High Quality Glasses</p>
          </div>
          <p className="text-lg text-center md:text-left text-gray-300">
            Join us as we redefine the future of eyewear—where luxury meets
            affordability, and where every pair tells a story. Your vision, your
            style, your journey—we&rsquo;ve got you covered.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex md:justify-start justify-center">
        <Image
          src="/heroimage.png"
          alt="High Quality Glasses"
          width={400}
          height={400}
          className="object-cover w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
