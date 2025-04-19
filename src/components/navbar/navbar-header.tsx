"use client";
import DeliveryTruck from "@/icons/delivery-truck";
import ReturnIcon from "@/icons/return-icon";
import SecureIcon from "@/icons/secure-icon";
import SupportIcon from "@/icons/support-icon";
import React from "react";

const navbarHeaderItem = [
  {
    id: "1",
    item: "Delivery",
    desc: "For all orders",
    icon: DeliveryTruck,
  },
  {
    id: "2",
    item: "Return Policy",
    desc: "If goods have problems",
    icon: ReturnIcon,
  },
  {
    id: "3",
    item: "Secure Payment",
    desc: "100% secure payment",
    icon: SecureIcon,
  },
  {
    id: "4",
    item: "24/7 Support",
    desc: "Dedicated support",
    icon: SupportIcon,
  },
];
const NavbarHeader = () => {
  return (
    <div className="bg-[#FFFBF5] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6  gap-2 ">
      {navbarHeaderItem.map((item) => (
        <div
          key={item.item}
          className="cursor-pointer bg-red-50/20 rounded-md p-3"
        >
          <div className="flex items-center gap-2 ">
            <item.icon
              size={22}
              color="#4FA88D"
              className="min-w-[35px] min-h-[35px]"
            />
            <h1 className="item-[24px] text-[#000000] ">{item.item} </h1>
          </div>
          <span className="text-[16px] text-[#000000]/60 ">{item.desc} </span>
        </div>
      ))}
    </div>
  );
};

export default NavbarHeader;
