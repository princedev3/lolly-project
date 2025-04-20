"use client";
import CirularUser from "@/components/about/circular-user";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="mt-4 mb-10 ">
      <div className="grid gap-y-[50px] h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 px-[10px] md:px-[40px] lg:px-[70px] gap-[20px] md:gap-[50px] ">
          <div className="w-full grid place-content-center place-item-center">
            <div className="grid gap-y-2 ">
              <h1 className="text-4xl mb-[10px] font-bold text-baseGreen capitalize">
                our vision
              </h1>
              <div className="text-justify text-gray-600">
                <span className="text-xl text-wrap font-semibold ">A</span>t
                lolly&rsquo;s, our vision is to redefine the online shopping
                experience by combining quality, style, and accessibility. We
                believe that great products should not only elevate your
                lifestyle but also be within reach. Our goal is to become a
                go-to destination for curated fashion and lifestyle essentials —
                where every click feels personal, every purchase adds value, and
                every customer is part of a community that celebrates
                individuality. We're not just building a store, we're building a
                brand that connects, inspires, and evolves with you.
              </div>
            </div>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full flex items-center min-h-[300px] justify-center relative"
          >
            <Image src={"/trendy.png"} fill alt="" className="object-cover" />
          </motion.div>
        </div>
        {/* //journey */}
        <div className="grid bg-[#FFFBF5] px-[10px] md:px-[40px] lg:px-[70px] py-[25px] gap-y-[18px] ">
          <h1 className="text-4xl font-bold text-baseGreen text-center capitalize">
            our Journey
          </h1>
          <div className="text-gray-600 text-center text-xl">
            What started as a simple idea — to bring better, bolder products to
            everyday people — has grown into a passionate movement of style,
            substance, and service.
          </div>

          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full relative h-[400px] rounded-sm overflow-hidden"
          >
            <Image src="/woman.png" alt="" fill className="object-cover" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-[10px] md:px-[40px] lg:px-[70px] gap-[20px] md:gap-[50px] ">
          <div className="w-full grid place-content-center place-item-center">
            <div className="grid gap-y-2 ">
              <h1 className="text-4xl mb-[10px] font-bold text-baseGreen capitalize">
                our mission
              </h1>
              <div className="text-justify text-gray-600 text-xl">
                To empower individuals through thoughtfully curated products
                that blend quality, style, and affordability — creating a
                seamless shopping experience that celebrates confidence,
                expression, and everyday luxury.We&rsquo;re here to redefine
                what it means to shop online: honest service, intentional
                design, and a community-first approach that puts you at the
                center of everything we do.
              </div>
            </div>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full flex items-center min-h-[300px] justify-center relative"
          >
            <Image src={"/mission.png"} fill alt="" className="object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
