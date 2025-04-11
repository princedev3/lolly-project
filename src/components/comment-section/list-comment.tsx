"use client";
import { CreatedComment } from "@/static-data/types";
import { userStore } from "@/static-data/user-session";
import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useDeleteCommentMutation } from "@/app/apis/_comment_index_api";
import { toast } from "sonner";

const ListComment = ({
  commentData,
  isGettingCommentLoading,
}: {
  isGettingCommentLoading: boolean;
  commentData: CreatedComment[] | undefined;
}) => {
  const session = userStore((state) => state.session);
  const [deleteComment, { isLoading }] = useDeleteCommentMutation();
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteComment({ id, userId: session?.user?.id });
      if (res.data.status === 200) {
        toast.success(res.data.message);
        return;
      }
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
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
  return (
    <div className="grid gap-y-4  mb-5">
      {commentData &&
        commentData.map((item, index) => (
          <motion.div
            variants={fadeInVariant}
            initial="initial"
            viewport={{ once: true }}
            custom={index}
            whileInView="animate"
            key={item.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <Image
                src={(item.user.image as string) || "/noavatar.png"}
                width={40}
                height={40}
                alt=""
                className="object-cover w-[40px] h-[40px] rounded-full"
              />
              <span className="text-gray-700">{item.comment}</span>
            </div>
            <motion.div whileTap={{ scale: 0.95 }} className="">
              {(session?.user?.role === "ADMIN" ||
                session?.user?.id === item.user.id) && (
                <Trash
                  onClick={() => handleDelete(item.id)}
                  className="text-gray-600 cursor-pointer"
                  size={17}
                />
              )}
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
};

export default ListComment;
