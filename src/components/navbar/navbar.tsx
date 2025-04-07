"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { UserButton } from "./user-button";
import { Menu, ShoppingCart, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navbarItems } from "@/static-data/staticdata";
import { userStore } from "@/static-data/user-session";
import { useCartStore } from "@/static-data/cart-store";

const Navbar = () => {
  const { totalItems } = useCartStore();
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const session = userStore((state) => state.session);
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  return (
    <>
      <div className="grid grid-flow-col justify-between items-center w-full h-[80px]">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt=""
            width={50}
            height={50}
            className="min-w-[30px] min-h-[30px] md:min-w-[50px] md:min-h-[50px] object-cover"
          />
        </Link>
        <div className="relative  lg:space-x-4 md:space-x-2 p-2 bg-white rounded-lg hidden md:flex">
          {navbarItems
            .filter(
              (item) =>
                item.pathName !== "/admin" ||
                (session?.user && session?.user?.role === "ADMIN")
            )
            .map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer  rounded-2xl"
              >
                <Link
                  href={item.pathName}
                  className={`${
                    pathName === item.pathName
                      ? "text-[#17CF97]   font-medium "
                      : ""
                  }  relative capitalize block z-10 px-5 py-2 text-[#17CF97]  `}
                >
                  <div
                    className={`${
                      pathName === item.pathName ? "" : "hidden"
                    } absolute inset-0 -z-10 bg-gray-100 rounded-2xl`}
                  ></div>

                  {item.title}
                </Link>
              </div>
            ))}
        </div>
        <div className="grid grid-flow-col gap-4 items-center w-full">
          <Link
            href={"/cart"}
            className={`${totalItems === 0 ? "hidden" : ""} relative`}
          >
            <ShoppingCart className="text-gray-500" />
            <div className="min-w-[24px] cursor-pointer absolute -top-4 -right-3 text-white font-normal min-h-[24px] rounded-full bg-baseGreen flex items-center justify-center ">
              {totalItems}{" "}
            </div>
          </Link>
          <Menu
            size={30}
            onClick={() => setOpenMenu(!openMenu)}
            className="text-baseGreen  md:hidden "
          />
          <UserButton />
        </div>
      </div>
      {
        <div
          className={`${
            openMenu
              ? "bg-gray-700/60 backdrop-blur-lg  md:hidden w-full h-full top-0 left-0 fixed z-50"
              : ""
          }`}
        >
          <div
            className={`${
              openMenu
                ? "md:hidden w-full h-full fixed top-0 left-0 bg-[#17CF97]   ease-in duration-500 transition-all"
                : "-left-[100%] ease-in duration-500 transition-all w-full h-full fixed top-0 "
            }  !z-[1000000]`}
          >
            <div
              onClick={() => setOpenMenu(false)}
              className="motion-preset-shake z-50 w-fit ml-auto  border-2 border-white rounded-full p-1 cursor-pointer"
            >
              <X className="text-white z-50" size={25} />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full gap-5">
              {navbarItems.map((item) => (
                <Link
                  onClick={() => setOpenMenu(false)}
                  key={item.id}
                  className={`
                 text-xl cursor-pointer capitalize text-white font-medium `}
                  href={item.pathName}
                >
                  {item.title}{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Navbar;
