"use client";
import { eyeglassBrands } from "@/static-data/staticdata";
import Image from "next/image";
import React from "react";
import { animate, delay, motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const fadeInVariant = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: (idx: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * idx,
      },
    }),
  };
  return (
    <div className="grid lg:grid-cols-2 w-full h-full gap-10 ">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))]  gap-4 mt-10">
        <div className="w-full h-[250px]  shadow-lg shadow-baseGreen/20 rounded-xl flex items-center justify-center overflow-hidden relative">
          <Image src={"/sun2.jpg"} alt="" fill className="object-cover " />
        </div>

        <div className="w-full h-[250px]  shadow-lg shadow-baseGreen/20 rounded-xl flex items-center overflow-hidden relative justify-center transform sm:-translate-y-5">
          <Image src={"/sun3.jpg"} alt="" fill className="object-cover " />
        </div>

        <div className="w-full h-[250px]  shadow-lg shadow-baseGreen/20 rounded-xl flex items-center justify-center overflow-hidden relative transform sm:translate-y-5">
          <Image src={"/sun4.jpg"} alt="" fill className="object-cover " />
        </div>
      </div>
      <div className=" self-start ">
        <div className="flex justify-between items-center font-semibold mb-8 capitalize text-baseGreen">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Brand
          </h1>
          <h1 className="text-4xl  font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Collections
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {eyeglassBrands.map((item, index) => (
            <motion.div
              variants={fadeInVariant}
              initial="initial"
              viewport={{ once: true }}
              custom={index}
              whileInView="animate"
              key={index}
              className=" bg-baseGreen/5 hover:bg-baseGreen/15  text-baseGreen motion-preset-shake capitalize rounded-lg shadow-md shadow-baseGreen/50 cursor-pointer text-center"
            >
              <Link
                href={`/product?search=${item.toLocaleLowerCase()}`}
                className="w-full h-full flex items-center justify-center p-2"
              >
                {" "}
                {item}{" "}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
