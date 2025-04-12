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
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
const Navbar = () => {
  const { totalItems } = useCartStore();
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  // const setSession = userStore((state) => state.setSession);
  const session = userStore((state) => state.session);

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  // const { data: session, status } = useSession();

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
                      ? "text-[#17CF97] font-medium"
                      : ""
                  }  relative capitalize block z-10 px-5 py-2 text-[#17CF97]`}
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
            <ShoppingCart className="text-[#17CF97]" />
            <div className="min-w-[24px] cursor-pointer absolute -top-4 -right-3 text-white font-normal min-h-[24px] rounded-full bg-baseGreen flex items-center justify-center ">
              {totalItems}{" "}
            </div>
          </Link>
          <Menu
            size={35}
            onClick={() => setOpenMenu(!openMenu)}
            className="text-baseGreen  md:hidden"
          />
          <UserButton />
        </div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-700/60 backdrop-blur-lg md:hidden w-full h-full top-0 left-0 fixed z-50"
          >
            <motion.div
              key="menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4 }}
              className="md:hidden w-full h-full fixed top-0 left-0 bg-[#17CF97] !z-[1000000]"
            >
              <div
                onClick={() => setOpenMenu(false)}
                className="z-50 w-fit ml-auto border-2 border-white rounded-full p-1 cursor-pointer"
              >
                <X className="text-white z-50" size={25} />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col justify-center items-center w-full h-full gap-5"
              >
                {navbarItems.map((item) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    <Link
                      onClick={() => setOpenMenu(false)}
                      href={item.pathName}
                      className="text-xl cursor-pointer capitalize text-white font-medium"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
