"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, LogIn, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { eyeglassBrands, navbarItems } from "@/static-data/staticdata";
import { userStore } from "@/static-data/user-session";
import { useCartStore } from "@/static-data/cart-store";
import { motion, AnimatePresence } from "framer-motion";
import CartIcon from "@/icons/cart-icon";
import UserIcon from "@/icons/user-icon";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";

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
  const [openCollection, setOpenCollection] = useState(false);
  const collectionRef = useRef<HTMLDivElement>(null);
  const session = userStore((state) => state.session);
  const [activeItem, setActiveItem] = useState<string>(pathName);
  const router = useRouter();
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

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        collectionRef.current &&
        !collectionRef.current.contains(event.target as Node)
      ) {
        setOpenCollection(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    setActiveItem(pathName);
  }, [pathName]);
  const handleLogout = async () => {
    await signOut({ redirect: false });
    await signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login` });
    router.push("/login");
  };
  return (
    <>
      <div className="grid grid-flow-col mx-auto bg-baseBlack relative justify-between  items-center w-full h-[108px]">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt=""
            width={50}
            height={50}
            className="min-w-[63px] min-h-[63px] object-cover"
          />
        </Link>
        <div className="relative gap-6 items-center rounded-lg hidden md:flex">
          {navbarItems
            .filter(
              (item) =>
                item.pathName !== "/admin" ||
                (session?.user && session?.user?.role === "ADMIN")
            )
            .map((item) => {
              return item.title.toLowerCase() === "collection" ? (
                <div
                  key={item.id}
                  ref={collectionRef}
                  onClick={() => {
                    setOpenCollection(!openCollection);
                    setActiveItem("collection");
                  }}
                  className={`${openCollection ? "text-[#17CF97]" : "text-white "} relative capitalize flex items-center gap-2 text-[22px] z-10  cursor-default`}
                >
                  {item.title}
                  <ChevronDown
                    className={`${openCollection ? "text-[#17CF97]" : "text-white "} w-5 h-5`}
                  />
                </div>
              ) : (
                <Link
                  key={item.id}
                  href={item.pathName}
                  className={`${
                    activeItem === item.pathName ||
                    (item.title.toLowerCase() === "collection" &&
                      activeItem === "collection")
                      ? "text-[#17CF97]"
                      : "text-white"
                  } relative capitalize flex items-center gap-2 text-[22px] z-10`}
                >
                  {item.title}
                </Link>
              );
            })}
        </div>

        <AnimatePresence>
          {openCollection && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-24 bg-white overflow-y-auto custom-scroll-bar max-h-[250px] text-black w-full p-4 rounded shadow-lg"
            >
              <div className="flex h-full gap-4 items-center font-semibold mb-8 capitalize text-baseGreen">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                  Brand
                </h1>
                <h1 className="text-4xl  font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  Collections
                </h1>
              </div>
              <div className="grid grid-cols-4  h-full gap-7">
                {eyeglassBrands.map((item, index) => (
                  <motion.div
                    variants={fadeInVariant}
                    initial="initial"
                    viewport={{ once: true }}
                    custom={index}
                    whileInView="animate"
                    key={index}
                    className=" capitalize  cursor-pointer "
                  >
                    <Link
                      href={`/product?search=${item.toLocaleLowerCase()}`}
                      className="w-full h-full text-gray-700"
                    >
                      {" "}
                      {item}{" "}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex items-center gap-3">
          {/* <SearchIcon
            size={25}
            color="#ffffff"
            onClick={() => {
              console.log("Cart icon clicked");
            }}
          /> */}

          {totalItems > 0 && (
            <div className="relative cursor-pointer">
              <Link href="/cart">
                <CartIcon
                  size={25}
                  color="#ffffff"
                  className="min-w-[30px] min-h-[30px]"
                />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-lg font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              </Link>
            </div>
          )}
          {
            session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    asChild
                    variant={"outline"}
                    size={"default"}
                    className="rounded-full"
                  >
                    <div className="flex space-x-1 bg-black hover:bg-black">
                      {session?.user ? (
                        <Image
                          width={30}
                          height={30}
                          src={session?.user?.image || "/noavatar.png"}
                          alt=""
                          className="max-w-[30px] rounded-full max-h-[30px] "
                        />
                      ) : (
                        <UserIcon
                          size={35}
                          className="min-w-[30px] min-h-[30px]"
                          color="#fff"
                        />
                      )}
                      <ChevronDown className="w-4 h-4 text-white" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-2">
                  <DropdownMenuLabel className="text-xl">
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-xl" onClick={handleLogout}>
                    Log Out
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/like"} className="cursor-pointer text-xl">
                      Likes
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={"/login"}>
                      <LogIn
                        size={30}
                        className="text-white min-w-[30px] min-h-[30px]"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Login</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
            //   <Button className="text-white cursor-pointer hover:bg-baseGreen bg-baseGreen text-xl py-6 px-6 motion-preset-shake motion-duration-1000">
            //   <Link href={"/login"}>Sign in</Link>
            // </Button>
          }
          <Menu
            size={35}
            onClick={() => setOpenMenu(!openMenu)}
            className="text-white md:hidden min-w-[38px] min-h-[38px]"
          />
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
              className="md:hidden w-full h-full fixed top-0 p-3 left-0 bg-gradient-to-br from-emerald-400 to-teal-600 !z-[1000000]"
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
                {navbarItems.map((item) => {
                  if (item.title === "admin") {
                    if (session && session.user?.role === "ADMIN") {
                      return (
                        <motion.div key={item.id} variants={itemVariants}>
                          <Link
                            onClick={() => setOpenMenu(false)}
                            href={item.pathName}
                            className="text-2xl cursor-pointer capitalize text-white font-semibold"
                          >
                            {item.title}
                          </Link>
                        </motion.div>
                      );
                    }
                  } else {
                    return (
                      <motion.div key={item.id} variants={itemVariants}>
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href={item.pathName}
                          className="text-2xl cursor-pointer capitalize text-white font-semibold"
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    );
                  }
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
