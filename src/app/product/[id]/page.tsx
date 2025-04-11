"use client";
import { useGetSingleProductQuery } from "@/app/apis/_product_index.api";
import LoadingPage from "@/components/navbar/loading";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/static-data/cart-store";
import { disAbleCart } from "@/static-data/helper-func";
import { ratings } from "@/static-data/staticdata";
import { Heart, LoaderCircle, Share2, Trash } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { userStore } from "@/static-data/user-session";
import Picker from "@emoji-mart/react";
import emojiData from "@emoji-mart/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useCreateCommentMutation,
  useGetAllCommentQuery,
} from "@/app/apis/_comment_index_api";
import ListComment from "@/components/comment-section/list-comment";
import StarRating from "@/components/comment-section/star-rating";
import { motion } from "framer-motion";

const SingleProduct = () => {
  const { id } = useParams();
  const [createComment, { isLoading: isCreatingComment }] =
    useCreateCommentMutation();
  const { data: commentData, isLoading: isGettingCommentLoading } =
    useGetAllCommentQuery(id as string);
  const session = userStore((state) => state.session);

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
  const { data, isLoading } = useGetSingleProductQuery(id as string);
  const [copied, setCopied] = useState(false);
  const [selectColored, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);

  const handleEmojiSelect = (emoji: any) => {
    setMessage((prev) => prev + emoji.native);
  };

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
      initialQuantity: data?.getSingleFetch.quantity as number,
    });
  };
  const isOutOfStock = disAbleCart(
    cartProductsList,
    data?.getSingleFetch.id as string,
    data?.getSingleFetch.quantity as number
  );

  const handleCreateReview = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log("Form is being submitted!");
      const target = e.target as HTMLFormElement;
      const formdata = new FormData(target);
      const rating = formdata.get("rating");
      const res = await createComment({
        rating,
        message,
        userId: session?.user?.id,
        productId: id,
      });
      if (res?.data?.status === 200) {
        target.reset();
        setMessage("");
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="grid md:grid-cols-2 my-6 gap-5 gap-y-5">
        <div className="w-full self-start  relative">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-[250px] h-[250px] mx-auto mb-4"
          >
            <Image
              src={data?.getSingleFetch.images[imageIndex] as string}
              alt=""
              fill
              className="object-cover rounded-full"
            />
          </motion.div>
          <div className="absolute top-2 w-full  justify-between flex  px-8">
            <Share2
              onClick={copyToClipboard}
              className={`${copied ? "text-gray-400" : "text-gray-600"}`}
            />
            <Heart className="text-gray-500" />
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
        <div className="self-start grid gap-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold capitalize">
            {data?.getSingleFetch.name}{" "}
          </h1>
          <p className="text-red-600 text-5xl">
            <span className="text-xl font-semibold">#</span>
            {data?.getSingleFetch.price.toLocaleString()}{" "}
          </p>
          <div className="grid gap-y-1">
            <span className="text-gray-500 text-lg">Select a color</span>
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
          <p className="text-xl text-gray-600">
            {data?.getSingleFetch?.brand}{" "}
          </p>
          <p className=" text-gray-600">{data?.getSingleFetch?.desc}</p>
          <StarRating rating={commentData?.averageRating as number} />
          <motion.div whileTap={{ scale: 0.95 }} className="w-full">
            <Button
              disabled={isOutOfStock}
              onClick={addToCarts}
              className="bg-baseGreen w-full hover:bg-baseGreen/80 py-4 disabled:cursor-not-allowed disabled:bg-baseGreen/80"
            >
              Add to cart
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="grid gap-y-4">
        <h1 className="text-xl capitalize text-gray-700">reviews</h1>
        <form onSubmit={handleCreateReview} className="">
          <div className="grid grid-cols-[1fr_auto] border rounded-md shadow  ">
            <Textarea
              required
              placeholder="write your review"
              value={message}
              className="!border-none !focus:ring-0 !focus:outline-none !shadow-none !outline-0 focus:border-none !focus:ring-0 !focus:outline-none  resize-none"
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="relative h-full">
              <button
                type="button"
                className="bg-gray-50 cursor-pointer w-[50px] md:w-[100px] h-full"
                onClick={() => setEmojiOpen(!emojiOpen)}
              >
                😊
              </button>
              {emojiOpen && (
                <div className="absolute top-full right-0 z-50">
                  <Picker data={emojiData} onEmojiSelect={handleEmojiSelect} />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2">
            <Select required name="rating">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">One</SelectItem>
                <SelectItem value="2">Two</SelectItem>
                <SelectItem value="3">Three</SelectItem>
                <SelectItem value="4">Four</SelectItem>
                <SelectItem value="5">Five</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" className="bg-baseGreen hover:bg-baseGreens">
              {isCreatingComment ? (
                <LoaderCircle
                  className="animate-spin grid mx-auto"
                  color="white"
                  size={22}
                />
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
        <ListComment
          commentData={commentData && commentData?.createdComment}
          isGettingCommentLoading={isGettingCommentLoading}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
