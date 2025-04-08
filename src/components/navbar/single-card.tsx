"use client";
import { Eye, Heart, Truck, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useCartStore } from "@/static-data/cart-store";
import { Product } from "@prisma/client";
import { disAbleCart } from "@/static-data/helper-func";

const SingleCard = ({
  name,
  id,
  desc,
  price,
  colors,
  sizes,
  images,
  userId,
  quantity,
  brand,
}: Product) => {
  const { addToCart, products: cartProducts } = useCartStore();
  const isOutOfStock = disAbleCart(cartProducts, id, quantity);

  return (
    <div className="h-[425px]  bg-gray-100 p-3  hover:shadow-[16px_0px_52px_-15px_#17CF97] group">
      <div className="relative h-[180px] bg-white flex items-center justify-center w-full">
        <Image
          src={images[0]}
          alt=""
          width={100}
          height={100}
          className="object-contain min-w-[100px] min-h-[100px] "
        />
        <div className="absolute  top-4  transition-all duration-300 right-3 z-20">
          <div className="grid gap-y-[6px]">
            <Heart size={35} className="shadow-sm rounded-full p-2" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={`/product/${id}`}>
                    <Eye size={35} className="shadow-sm rounded-full p-2" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>see more</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="absolute bottom-2 grid grid-flow-col gap-2 items-center">
          <Truck className="text-baseGreen" />
          <span
            className={`${
              quantity <= 0 || isOutOfStock ? "line-through" : ""
            } text-baseGreen text-sm font-medium capitalize`}
          >
            avaliable
          </span>
        </div>
      </div>
      <div className="grid gap-y-4">
        <div className="w-[70px] h-[70px] mx-auto flex items-center justify-center font-serif text-gray-700">
          <h1 className="text-2xl font-semibold skew-y-2 capitalize">
            {brand}{" "}
          </h1>
        </div>
        <div className="flex justify-between">
          <h1 className="w-[65%] text-gray-700 text-lg capitalize">{name} </h1>
          <div className="text-sm">
            <h1 className="text-pink-600 font-semibold text-lg">
              <span className="">$</span>
              <span className="">{price}</span>
            </h1>
            <span className="text-gray-700 text-lg">QTY: {quantity} </span>
          </div>
        </div>
        <button
          disabled={quantity <= 0 || isOutOfStock}
          onClick={() =>
            addToCart({
              name,
              id,
              price,
              quantity: 1,
              image: images[0],
              size: "M",
              color: "#000",
              initialQuantity: quantity,
            })
          }
          className={`bg-baseGreen z-50 pointer-events-auto text-white font-medium cursor-pointer py-2 rounded-sm disabled:cursor-not-allowed disabled:bg-baseGreen/80`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
