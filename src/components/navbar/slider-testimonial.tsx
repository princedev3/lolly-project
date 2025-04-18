"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Kristin Watson",
    image: "/img1.png",
    text: "Lorem ipsum dolorUt enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit... sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    name: "John Doe",
    image: "/img2.png",
    text: "Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit...Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    name: "Jane Smith",
    image: "/img3.png",
    text: "Ex ea commodo consequat. Duis aute irure dolorLorem ipsum dolor sit amet, consectetur adipiscing elit...Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    name: "Emily Rose",
    image: "/img4.png",
    text: "In reprehenderit in voluptate velit esse cillum doloreIn reprehenderit in voluptate velit esse cillum dolore....Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    name: "Liam Grey",
    image: "/img5.png",
    text: "Fugiat nulla pariatur. Excepteur sint occaecat cupidatatIn reprehenderit in voluptate velit esse cillum dolore....Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideToLoop(index); // move swiper to the clicked image
  };

  return (
    <div className="w-full overflow-visible mx-auto text-center py-10">
      {/* Swiper Container */}
      <div className="w-full max-w-[1200px] mx-auto px-4 overflow-visible">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={5}
          spaceBetween={1}
          centeredSlides
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full flex justify-center items-center"
          breakpoints={{
            0: { slidesPerView: 1.8 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 5 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <button
                onClick={() => handleImageClick(index)}
                className={`${
                  index === activeIndex
                    ? "scale-125  w-[150px] h-[150px] "
                    : "opacity-80 scale-90 w-[140px] h-[140px]"
                } relative`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={`object-cover  mx-auto transition-all duration-300 shadow-lg
                `}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Testimonial Content */}
      <div className="px-4 full mx-auto mt-6">
        <p className="text-gray-600 mb-4 w-full text-sm sm:text-base">
          {testimonials[activeIndex].text}
        </p>

        <div className="flex justify-center w-full text-yellow-400 text-lg mb-2">
          {"★★★★★".split("").map((star, i) => (
            <span key={i}>{star}</span>
          ))}
        </div>

        <h3 className="font-bold">{testimonials[activeIndex].name}</h3>

        {/* Custom Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleImageClick(i)}
              className={`${
                i === activeIndex
                  ? "bg-black w-[14px] h-[14px] scale-110"
                  : "bg-gray-400 w-3 h-3"
              } rounded-full transition-all`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
