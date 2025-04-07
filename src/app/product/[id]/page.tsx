"use client";
import { useGetSingleProductQuery } from "@/app/apis/_product_index.api";
import LoadingPage from "@/components/navbar/loading";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/static-data/cart-store";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const SingleProduct = () => {
  const { addToCart } = useCartStore();
  const pathname = usePathname();
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id as string);
  const [copied, setCopied] = useState(false);
  const [selectColored, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

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
      price: data?.getSingleFetch.price as number,
      image: data?.getSingleFetch.images[0] as string,
      size: selectedSize,
      color: selectColored,
      quantity: 1,
    });
  };
  return (
    <div className="grid md:grid-cols-2 my-6 gap-5 gap-y-5">
      <div className="w-full self-start">
        <div className="relative w-full h-[270px] ">
          <Image
            src={data?.getSingleFetch.images[0] as string}
            alt=""
            fill
            className="object-contain"
          />
          <div className="absolute top-2 w-full  justify-between flex  px-8">
            <Share2
              onClick={copyToClipboard}
              className={`${copied ? "text-gray-400" : "text-gray-600"}`}
            />
            <Heart className="text-gray-500" />
          </div>
        </div>
        <div className="flex gap-3 flex-wrap w-full ">
          {data?.getSingleFetch?.images?.map((item, idx) => (
            <Image
              key={idx}
              src={item}
              alt=""
              width={80}
              height={80}
              className="w-[80px] h-[50px] border object-contain cursor-pointer p-1"
            />
          ))}
        </div>
      </div>
      <div className="self-start grid gap-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {data?.getSingleFetch.name}{" "}
        </h1>
        <p className="text-red-600 text-5xl">
          <span className="text-xl font-semibold">#</span>
          {data?.getSingleFetch.price}{" "}
        </p>
        <div className="grid gap-y-1">
          <span className="text-gray-500 text-lg">Select a color</span>
          <div className="flex gap-2">
            {data?.getSingleFetch.colors.map((item) => (
              <div
                key={item}
                className={`${
                  selectColored === item ? "border-2 " : ""
                } w-7 h-7 rounded-full  flex  items-center justify-center`}
              >
                <div
                  className={` w-5 h-5 rounded-full cursor-pointer`}
                  style={{ backgroundColor: item }}
                  onClick={() => handleColorChange(item)}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-y-1">
          <span className="text-gray-500 text-lg">Select a size</span>
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
        <p className="text-xl text-gray-600">{data?.getSingleFetch?.brand} </p>
        <p className=" text-gray-600">{data?.getSingleFetch?.desc}</p>
        <Button
          onClick={addToCarts}
          className="bg-baseGreen hover:bg-baseGreen/80"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default SingleProduct;
