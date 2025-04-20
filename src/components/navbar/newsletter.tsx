"use client";
import { useCreateNewsLetterMutation } from "@/app/apis/_newsletter_index_api";
import React from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [createNewsLetter, { isLoading }] = useCreateNewsLetterMutation();
  const handleCreateNewsLetter = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault();
      const target = e.target as HTMLFormElement;
      const formdata = new FormData(target);
      const email = formdata.get("email") as string;
      const res = await createNewsLetter({ email });
      if (res.data.status === 200) {
        target.reset();
        toast.success(res.data.message);
        return;
      }
      toast.error(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full  bg-baseGreen px-1 lg:px-0  py-12 ">
      <div className="grid gap-2 md:gap-5 justify-center">
        <h1 className="mx-auto text-white font-semibold text-center text-xl md:text-2xl lg:text-3xl">
          Get our free newsletter + bonus content{" "}
        </h1>
        <p className="mx-auto text-center text-white md:text-xl">
          Be the first to receive the hottest styles before anyone else
          Exclusive launch! Be among the first to own it.
        </p>
        <form
          onSubmit={handleCreateNewsLetter}
          className="mx-auto grid grid-cols-[1fr,120px]  w-full"
        >
          <input
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            className="w-full rounded-none outline-none bg-white p-2"
          />
          <button
            disabled={isLoading}
            type="submit"
            className="px-4 py-2 bg-black capitalize text-white font-medium"
          >
            submit
          </button>
        </form>
        <p className="text-center text-white text-lg md:text-base font-medium mx-auto">
          You are subiscribing to email updates, your data is safe and you can
          unsubscribe at anytime with a single click
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
