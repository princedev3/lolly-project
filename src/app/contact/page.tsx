"use client";

import { Button } from "@/components/ui/button";
import { Clock, LoaderCircle, Mail, MapPin, PhoneOutgoing } from "lucide-react";
import React, { useState } from "react";

const ContactPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event?.target as HTMLFormElement;
    const formData = new FormData(target);
    setLoading(true);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEBFORM as string);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      target.reset();
      setLoading(false);
    }
    setLoading(false);
  }
  return (
    <div className="mb-4">
      <div className="w-full mx-auto bg-baseGreen py-5 font-semibold text-2xl capitalize text-white text-center ">
        get in touch with us now!
      </div>

      <div className="relative  mx-auto w-full rounded-md p-4">
        <div className="grid grid-cols-2 grid-rows-2 gap-0 relative">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+20 11 16798756"
            className="p-2 md:p-6 flex flex-col items-start justify-center"
          >
            <PhoneOutgoing className="grid mx-auto" size={30} color="#17cf97" />
            <h3 className="sm:text-xl grid mx-auto font-bold text-baseGreen">
              {" "}
              Phone Number
            </h3>
            <p className="grid mx-auto text-baseGreen no-underline">
              +91 80004 36640
            </p>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:someone@example.com"
            className="p-2 md:p-6 flex flex-col items-start justify-center"
          >
            <Mail className="grid mx-auto" color="#17cf97" size={30} />
            <h3 className="sm:text-xl  font-bold grid mx-auto text-baseGreen">
              {" "}
              Email
            </h3>

            <p className="text-baseGreen no-underline  grid mx-auto  break-all whitespace-normal text-wrap  break-words">
              sales@gmail.com
            </p>
          </a>
          <div className="p-2 md:p-6  flex flex-col items-start justify-center">
            <MapPin className="grid mx-auto" color="#17cf97" size={30} />
            <h3 className="sm:text-xl font-bold grid mx-auto text-baseGreen ">
              Location
            </h3>
            <p className="text-baseGreen  no-underline grid mx-auto text-center">
              518, Rhythm Plaza, Amar Javan
            </p>
          </div>
          <div className="p-2 md:p-6  flex flex-col items-start justify-center text-baseGreen">
            <Clock className="grid mx-auto" color="#17cf97" size={30} />
            <h3 className="sm:text-xl font-bold grid mx-auto ">
              Working Hours
            </h3>
            <p className=" grid mx-auto ">Mon To Sat</p>
            <p className=" grid mx-auto no-underline">8-AM To 9-PM</p>
          </div>
          <div className="absolute top-[10%] bottom-[10%] left-1/2 w-px bg-[#17cf97]/30 " />
          <div className="w-[40px] h-[40px]   absolute left-1/2 top-1/2 -translate-x-1/2 transform z-10 bg-white  -translate-y-1/2 rounded-full "></div>
          <div className="absolute left-[10%] right-[10%] top-1/2 h-px bg-[#17cf97]/30 " />
        </div>
      </div>
      <div className="  mt-4">
        <div className="w-full max-w-3xl mx-auto grid gap-y-4">
          <div className="grid gap-y-1 mb-3">
            <div className="text-center text-xl font-semibold text-baseGreen/70">
              Any questions or remarks? Just write to write us a message!
            </div>
          </div>
          <div className="mb-[30px] ">
            <form onSubmit={handleSubmit} className="w-full grid gap-y-6">
              <div className="w-full grid mx-auto md:grid-flow-col gap-6">
                <div className="grid gap-y-2">
                  <label htmlFor="" className="text-baseGreen/70 text-xl">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="enter your email"
                    name="email"
                    className={`border placeholder:text-[#17cf97]/60 text-gray-500 outline-none p-2 rounded-3xl border-[#17cf97]/20 transition-all ${
                      isFocused ? "bg-transparent" : "bg-[#17cf97]/10 "
                    }`}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </div>
                <div className="grid gap-y-2">
                  <label htmlFor="" className="text-baseGreen/70 text-xl">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="enter your name"
                    className={`border p-2 rounded-3xl placeholder:text-[#17cf97]/60 text-gray-500 outline-none transition-all ${
                      isFocused1 ? "bg-transparent" : "bg-[#17cf97]/10 "
                    }`}
                    onFocus={() => setIsFocused1(true)}
                    onBlur={() => setIsFocused1(false)}
                  />
                </div>
              </div>
              <textarea
                rows={7}
                name="message"
                onFocus={() => setIsFocused2(true)}
                onBlur={() => setIsFocused2(false)}
                className={`border border-[#17cf97]/10 p-2 rounded-3xl placeholder:text-[#17cf97]/60 text-gray-500 outline-none transition-all ${
                  isFocused2 ? "bg-transparent" : "bg-[#17cf97]/10 "
                }`}
                placeholder="enter your message "
              />
              <Button className="my-3 !py-7 text-xl bg-baseGreen hover:bg-baseGreen/80 ">
                {loading ? (
                  <LoaderCircle
                    className="animate-spin text-center"
                    size={20}
                  />
                ) : (
                  "submit"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="">{/* <Maps /s> */}</div>
    </div>
  );
};

export default ContactPage;
