"use client";
import CirularUser from "@/components/about/circular-user";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="mt-4 mb-10 ">
      <div className="grid gap-y-4 h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="w-full grid place-content-center place-item-center">
            <div className="grid gap-y-2 ">
              <h1 className="text-4xl font-bold text-baseGreen capitalize">
                our vision
              </h1>
              <div className="text-justify text-gray-600">
                <span className="text-xl text-wrap font-semibold">A</span>t
                lolly&rsquo;s we envision a world where style meets innovation,
                and protection meets personality. We believe that sunglasses are
                more than just an accessory—they are an extension of your
                identity, a symbol of confidence, and a gateway to limitless
                adventure. We are committed to combining cutting-edge
                technology, sustainable craftsmanship, and timeless design to
                create eyewear that doesn&rsquo;t just shield your eyes but
                transforms the way you see the world. With a focus on comfort,
                durability, and trendsetting aesthetics, we aim to empower
                individuals to express themselves fearlessly—one pair of
                sunglasses at a time.
              </div>
            </div>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex items-center justify-center"
          >
            <CirularUser />
          </motion.div>
        </div>

        <div className="w-full grid md:grid-cols-2 gap-8 h-full">
          <div className="order-first md:order-last flex justify-center items-center">
            <div className="grid gap-y-2 md:text-left">
              <h1 className="text-4xl font-bold text-baseGreen capitalize">
                our mission
              </h1>
              <div className="text-justify text-gray-600">
                Our mission is to provide high-quality, fashion-forward, and
                performance-driven eyewear that not only enhances your vision
                but also elevates your style. Whether you&rsquo;re exploring
                sun-soaked beaches, navigating city streets, or making a bold
                fashion statement, our sunglasses are designed to keep up with
                your journey. We are committed to combining cutting-edge
                technology, sustainable craftsmanship, and timeless design to
                create eyewear that doesn&rsquo;t just shield your eyes but
                transforms the way you see the world. With a focus on comfort,
                durability, and trendsetting aesthetics, we aim to empower
                individuals to express themselves fearlessly—one pair of
                sunglasses at a time.
              </div>
            </div>
          </div>

          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative md:order-first min-h-[300px] rounded-sm overflow-hidden "
          >
            <Image src="/face-5.jpg" alt="" fill className="object-cover " />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="w-full grid place-content-center place-item-center">
            <div className="grid gap-y-2 ">
              <h1 className="text-4xl font-bold text-baseGreen capitalize">
                our Journey
              </h1>
              <div className="text-justify text-gray-600">
                Join us as we redefine the future of eyewear—where luxury meets
                affordability, and where every pair tells a story. Your vision,
                your style, your journey—we&rsquo;ve got you covered.
              </div>
            </div>
          </div>
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full relative h-[300px] rounded-sm overflow-hidden"
          >
            <Image src="/face-6.jpg" alt="" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
