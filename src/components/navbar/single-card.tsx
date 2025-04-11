"use client";
import { Eye, Heart, Truck, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import {
  useCreateLikeMutation,
  useGetLikesQuery,
} from "@/app/apis/like_index_api";
import { userStore } from "@/static-data/user-session";
import { toast } from "sonner";
import { motion } from "framer-motion";

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
  const [createLike] = useCreateLikeMutation();
  const { data, isLoading } = useGetLikesQuery(null);

  const session = userStore((state) => state.session);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!isLoading && data?.message) {
      setLiked(data?.message?.includes(id));
    }
  }, [data, id, isLoading]);

  const handleLike = async () => {
    try {
      if (!session) {
        toast.error("kindly logins");
        return;
      }

      const res = await createLike({ id, userId: session.user?.id });
      setLiked((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="h-[425px]  bg-gray-100 p-3  hover:shadow-[16px_0px_52px_-15px_#17CF97] group"
    >
      <div className="relative h-[180px] bg-white flex items-center justify-center w-full">
        <div className="w-[120px] relative h-[120px] rounded-full overflow-hidden bg-gray-50">
          <Image src={images[0]} alt="" fill className="object-cover" />
        </div>
        <div className="absolute  top-4  transition-all duration-300 right-2 z-50">
          <div className="grid gap-y-[6px]">
            <motion.div
              whileTap={{ scale: 0.85 }}
              onClick={handleLike}
              className="cursor-pointer"
            >
              <Heart
                size={40}
                className={`${
                  liked ? "fill-red-500 stroke-red-500" : ""
                } shadow-sm text-baseGreen rounded-full p-2`}
              />
            </motion.div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={`/product/${id}`}>
                    <Eye
                      size={40}
                      className="shadow-sm rounded-full p-2 text-baseGreen"
                    />
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
          <h1 className="text-xl text-gray-600 font-semibold skew-y-1 capitalize">
            {brand}{" "}
          </h1>
        </div>
        <div className="flex justify-between">
          <h1 className="w-[65%] text-gray-700 text-lg capitalize">{name} </h1>
          <div className="text-sm">
            <h1 className="text-gray-700 text-lg">
              <span className="text-xl font-semibold">#</span>
              <span className="">{price.toLocaleString()}</span>
            </h1>
            <span className="text-gray-600 text-lg">QTY: {quantity} </span>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={quantity <= 0 || isOutOfStock}
          onClick={() => {
            addToCart({
              name,
              id,
              price,
              quantity: 1,
              image: images[0],
              size: "M",
              color: "#000",
              initialQuantity: quantity,
            });
            toast.success("added to cart");
          }}
          className={`bg-baseGreen z-50 pointer-events-auto text-white font-medium cursor-pointer py-3 rounded-sm disabled:cursor-not-allowed disabled:bg-baseGreen/80`}
        >
          Add to cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SingleCard;
