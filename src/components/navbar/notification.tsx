"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Notification = () => {
  return (
    <Marquee speed={20} className="h-[50px] w-full bg-slate-50/50">
      <div className="flex ">
        <div className="flex items-center gap-2 motion-preset-bounce">
          <Image
            src={"/sun1.jpg"}
            alt=""
            width={120}
            height={40}
            className="w-[120px] h-[40px] object-cover"
          />

          <div className="wave-text text-gray-700 text-lg">
            <span className="wave mr-1">Life</span>
            <span className="wave  mr-1">is</span>
            <span className="wave mr-1">too</span>
            <span className="wave mr-1">bright-</span>
            <span className="wave mr-2">wear</span>
            <span className="wave mr-1">better</span>
            <span className="wave mr-2">wear</span>
            <span className="wave mr-1">shades</span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={"/promo.jpg"}
              alt=""
              width={120}
              height={40}
              className="w-[120px] h-[40px] object-cover"
            />
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default Notification;
