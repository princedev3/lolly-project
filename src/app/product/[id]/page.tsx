"use client";
import { useGetSingleProductQuery } from "@/app/apis/_product_index.api";
import LoadingPage from "@/components/navbar/loading";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/static-data/cart-store";
import { disAbleCart } from "@/static-data/helper-func";
import { ChevronDown, ChevronUp, Share2 } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import SingleSecure from "@/icons/single-search";
import { Separator } from "@/components/ui/separator";
import RelatedProduct from "@/components/related-product";
import ProductReviews from "@/components/product-reviews";

const SingleProduct = () => {
  const { id } = useParams();

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
  const { addToCart, products: cartProductsList } = useCartStore();
  const pathname = usePathname();
  const [showReview, setShowReview] = useState("review");
  const { data, isLoading } = useGetSingleProductQuery(id as string);
  const [copied, setCopied] = useState(false);
  const [selectColored, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const [isZoomed, setIsZoomed] = useState(false);

  if (isLoading) {
    return <LoadingPage />;
  }
  const copyToClipboard = async () => {
    try {
      const url = `${window.location.origin}${pathname}`;
      await navigator.clipboard.writeText(url);
      toast.success("copied");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
      setCopied(false);
    }
  };

  const handleColorChange = (item: string) => {
    setSelectedColor(item);
  };
  const handleSizeChange = (item: string) => {
    setSelectedSize(item);
  };
  const addToCarts = () => {
    if (!selectColored || !selectedSize) {
      toast.error("select a size or color");
      return;
    }
    addToCart({
      name: data?.getSingleFetch.name as string,
      id: data?.getSingleFetch.id as string,
      price: (data?.getSingleFetch.price as number) * productQuantity,
      image: data?.getSingleFetch.images[0] as string,
      size: selectedSize,
      color: selectColored,
      quantity: productQuantity,
      initialQuantity: data?.getSingleFetch.quantity as number,
    });
  };
  const isOutOfStock = disAbleCart(
    cartProductsList,
    data?.getSingleFetch.id as string,
    data?.getSingleFetch.quantity as number
  );

  const handleSecureClick = () => {
    setIsZoomed(true);
    setTimeout(() => setIsZoomed(false), 300);
  };
  return (
    <div className="overflow-x-hidden  p-[10px] md:p-[20px] lg:p-[40px]">
      <div className="grid md:grid-cols-2 gap-5 gap-y-5 ">
        <div className="w-full self-start  relative">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, scale: isZoomed ? 1.1 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full h-[350px] mx-auto mb-4"
          >
            <Image
              src={data?.getSingleFetch.images[imageIndex] as string}
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute top-2 w-full  justify-between flex  px-8">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="bg-white p-1 rounded-full cursor-pointer"
            >
              <Share2
                onClick={copyToClipboard}
                className={`${copied ? "text-gray-400" : "text-gray-600"}`}
              />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="bg-white p-1 rounded-full cursor-pointer"
              onClick={handleSecureClick}
            >
              <SingleSecure />
            </motion.div>
          </div>
          <div className="flex gap-3 flex-wrap w-full ">
            {data?.getSingleFetch?.images?.map((item, idx) => (
              <motion.div
                variants={fadeInVariant}
                initial="initial"
                viewport={{ once: true }}
                custom={idx}
                whileInView="animate"
                className=""
                key={idx}
              >
                <Image
                  onClick={() => setImageIndex(idx)}
                  key={idx}
                  src={item}
                  alt=""
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px] border object-cover cursor-pointer p-1"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="self-start grid gap-4 md:bg-[#FFFBF5]  md:px-[30px] md:py-[50px] ">
          <h1 className="text-lg  md:text-xl font-semibold capitalize">
            Home / New Collection / {data?.getSingleFetch.brand}
          </h1>
          <h1 className="text-lg  md:text-xl font-semibold capitalize">
            {data?.getSingleFetch.name} / {data?.getSingleFetch.quantity}
          </h1>
          <Separator className="bg-baseBlack/50" />
          <p className="text-baseBlack text-2xl">
            #{data?.getSingleFetch.price.toLocaleString()}{" "}
          </p>
          <div className="grid gap-y-1">
            <span className="text-gray-500">Select a color</span>
            <div className="flex gap-2">
              {data?.getSingleFetch.colors.map((item) => (
                <div
                  key={item}
                  className={`${
                    selectColored === item ? "border-2 border-gray-600" : ""
                  } w-7 h-7 rounded-full  flex  items-center justify-center`}
                >
                  <div
                    className={`w-5 h-5 rounded-full cursor-pointer`}
                    style={{ backgroundColor: item }}
                    onClick={() => handleColorChange(item)}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-y-1">
            <span className="text-gray-500">Select a size</span>
            <div className="flex gap-4">
              {data?.getSingleFetch.sizes.map((item) => (
                <div
                  key={item}
                  onClick={() => handleSizeChange(item)}
                  className={`${
                    selectedSize === item ? "bg-gray-600 text-white" : ""
                  } text-sm min-w-10 text-center cursor-pointer border p-1 flexx items-center justify-center capitalize rounded-sm text-gray-600`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className=" text-gray-600">{data?.getSingleFetch?.desc}</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 border w-[70px] h-[50px] aspect-square p-1">
              <span className="text-xl">{productQuantity}</span>

              <div className="flex items-center flex-col">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="w-full"
                  disabled={
                    productQuantity >= (data?.getSingleFetch.quantity ?? 0)
                  }
                  onClick={() => setProductQuantity(productQuantity + 1)}
                >
                  <ChevronUp className="text-gray-600 cursor-pointer" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="w-full disabled:cursor-not-allowed"
                  disabled={productQuantity <= 1}
                  onClick={() => setProductQuantity(productQuantity - 1)}
                >
                  <ChevronDown className="text-gray-600 cursor-pointer disabled:cursor-not-allowed" />
                </motion.button>
              </div>
            </div>
            <motion.div whileTap={{ scale: 0.95 }} className="w-full">
              <Button
                disabled={isOutOfStock}
                onClick={addToCarts}
                className="bg-baseGreen rounded-3xl font-semibold min-w-[200px]  hover:bg-baseGreen/80 py-6 disabled:cursor-not-allowed disabled:bg-baseGreen/80"
              >
                Add to cart
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <Separator className="bg-baseBlack/10 my-11" />
      <div className="grid gap-y-10">
        <div className="grid gap-y-10">
          <div className="flex items-center gap-10">
            <div className="relative">
              <span
                onClick={() => setShowReview("desc")}
                className={`text-2xl text-[#000000] cursor-pointer ${
                  showReview === "desc" ? "font-medium" : ""
                }`}
              >
                Description
              </span>
              {showReview === "desc" && (
                <div className="absolute -bottom-1 left-0 w-[120%] h-[3px] bg-baseGreen rounded-full" />
              )}
            </div>

            <div className="relative">
              <span
                onClick={() => setShowReview("review")}
                className={`text-2xl text-[#000000] cursor-pointer ${
                  showReview === "review" ? "font-medium" : ""
                }`}
              >
                Review
              </span>
              {showReview === "review" && (
                <div className="absolute -bottom-1 left-0 w-[120%] h-[3px] bg-baseGreen rounded-full" />
              )}
            </div>
          </div>
        </div>

        {showReview === "desc" && (
          <div className="mb-5">{data?.getSingleFetch.desc}</div>
        )}
        {showReview === "review" && <ProductReviews id={id as string} />}
      </div>
      <RelatedProduct brand={data?.getSingleFetch?.brand as string} />
    </div>
  );
};

export default SingleProduct;
