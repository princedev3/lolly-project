"use client";
import Image from "next/image";
import React from "react";
import { FacebookIcon, Instagram, Twitter } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid gap-y-10 relative mb-5 bg-white z-0">
      {/* top */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        <div className="self-start grid gap-y-3 z-20">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={70}
              height={70}
              alt=""
              className="object-cover w-[70px] h-[70px]"
            />
          </Link>
          <span className="text-gray-600">
            A good pair of sunglasses isn&rsquo;t just an accessory; it&rsquo;s
            an attitude. Wear them with confidence and let the world wonder
            what&rsquo;s behind the lenses. Put on some shades and find your
            sunshine💡
          </span>
        </div>
        <div className="grid gap-y-4 self-start ">
          <span className="text-black text-lg font-semibold uppercase">
            Navigation
          </span>
          <Link href={"/policy"} className="text-gray-600  cursor-pointer">
            Policy
          </Link>
          <Link href={"/about"} className="text-gray-600  cursor-pointer">
            About us{" "}
          </Link>
          <Link href={"/contact"} className="text-gray-600  cursor-pointer">
            Contact us{" "}
          </Link>
        </div>

        <div className="grid gap-y-5 self-start ">
          <span className="text-black text-lg font-semibold uppercase">
            FOLLOW US
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/17n56qzU3S/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded-full group hover:bg-baseBlue cursor-pointer flex items-center justify-center"
            >
              <FacebookIcon
                size={30}
                className="text-gray-600 group-hover:text-white"
              />
            </a>
            <div className="border p-2 rounded-full group hover:bg-baseBlue/65 flex items-center justify-center">
              <a
                href="https://www.instagram.com/ashabiade_ope/profilecard/?igsh=MXg0ZTZld3NqbnN6ag=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 group-hover:text-white"
                // className="border p-2 rounded-full group hover:bg-baseBlue cursor-pointer flex items-center justify-center"
              >
                <Instagram
                  size={30}
                  className="text-gray-600 group-hover:text-white"
                />
              </a>
            </div>
            <div className="border p-2 rounded-full group hover:bg-pink-500 flex items-center justify-center">
              <a
                href="https://www.tiktok.com/@lollys.collection7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok
                  size={30}
                  className="text-gray-600 group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid gap-y-4 self-start ">
          <span className="text-black text-lg font-semibold uppercase">
            Payment
          </span>
          <ul className="flex flex-col gap-4">
            <span className="text-gray-600  cursor-pointer">
              Paystack Integration
            </span>
            <li className="text-gray-600  cursor-pointer capitalize">fast</li>
            <li className="text-gray-600 cursor-pointer capitalize">
              reliable
            </li>
            <li className="text-gray-600  cursor-pointer capitalize">
              secured
            </li>
          </ul>
        </div>
      </div>
      {/* middle */}
      <div className="grid gap-y-2">
        <h1 className="">OPENING HOURS</h1>
        <div className="grid  grid-flow-col auto-cols-max gap-8">
          <div className="self-start grid gap-y-3">
            <span className="">Monday - Saturday </span>
            <span className=""> 8:00 am to 9:00 pm</span>
          </div>
          <div className="self-start grid gap-y-3">
            <span className="">Sunday </span>
            <span className="">CLOSED</span>
          </div>
        </div>
      </div>

      <div className="w-full border-b-[1px] border-gray-300"></div>
      {/* down */}
      <div className="grid gap-y-2 sm:grid-flow-col">
        <div className="">
          <span className="text-gray-600 text-sm">
            &copy; 2025 Restaurants. All Right Reserved. Designed by Prince
          </span>
        </div>
        <div className="grid grid-flow-col auto-cols-max gap-5 sm:justify-end">
          <Link
            href={"/policy"}
            className="text-gray-600 text-sm cursor-pointer"
          >
            Terms of Service
          </Link>
          <Link
            href={"/policy"}
            className="text-gray-600 text-sm cursor-pointer"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
