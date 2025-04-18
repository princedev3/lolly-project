"use client";
import { Button } from "@/components/ui/button";
import { Clock, LoaderCircle, Mail, MapPin, PhoneOutgoing } from "lucide-react";
import React, { useState } from "react";
import { useCreateMessageMutation } from "../apis/_contact_index_api";
import { toast } from "sonner";
import { contactInfo } from "@/static-data/staticdata";

const ContactPage = () => {
  const [createMessage] = useCreateMessageMutation();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event?.target as HTMLFormElement;
    const formData = new FormData(target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!email || !message || !name) {
      toast.error("fill form correctly");
      return;
    }
    setLoading(true);
    const res = await createMessage({ name, email, message });
    if (res.data.status === 200) {
      target.reset();
      toast.success(res.data.message);
      setLoading(false);
      return;
    }
    toast.error(res.data.message);
  }

  return (
    <div className="mb-4">
      <div className="bg-[#FFFBF5]  p-[30px] md:p-[60px]">
        <h1 className="mx-auto text-center font-semibold text-[22px] mb-[30px] md:text-[44px]  ">
          Get in Touch With Us Now
        </h1>
        <div className="">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((item, Idx) => {
              if (item.type === "email" || item.type === "Phone Number") {
                return (
                  <a
                    key={Idx}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.to}
                    className="p-2 md:p-6 flex gap-3 items-center border rounded-xl border-baseBlack"
                  >
                    <item.icon
                      size={50}
                      className="min-w-[50px] min-h-[50px] "
                    />
                    <div className="grid gap-y-2">
                      <h3 className="sm:text-xl grid capitalize  font-bold">
                        {" "}
                        {item.type}
                      </h3>
                      <div className="max-w-full w-full text-center">
                        <span className="text-center grid mx-auto text-lg no-underline capitalize break-words whitespace-normal">
                          {item.to}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              } else {
                return (
                  <div
                    key={Idx}
                    className="p-2 md:p-6 flex items-center gap-3 border rounded-xl border-baseBlack"
                  >
                    <item.icon
                      size={50}
                      className="min-w-[50px] min-h-[50px] "
                    />
                    <div className="grid gap-y-2">
                      <h3 className="sm:text-xl grid capitalize font-bold">
                        {" "}
                        {item.type}
                      </h3>
                      <p className="grid mx-auto text-lg no-underline">
                        {item.to}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className=" p-[30px] md:p-[60px] mt-4">
        <div className="w-full mx-auto grid gap-y-4">
          <div className="grid gap-y-1 mb-3">
            <div className="text-center text-2xl md:text-3xl capitalize font-semibold text-baseBlack">
              Send Us A message
            </div>
          </div>
          <div className="">
            <form onSubmit={handleSubmit} className="w-full grid gap-y-6">
              <div className="w-full grid mx-auto md:grid-flow-col gap-6">
                <div className="grid gap-y-2">
                  <label htmlFor="" className="text-xl">
                    Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your email"
                    name="email"
                    className={`border outline-none p-3 transition-all
                    
                    `}
                  />
                </div>
                <div className="grid gap-y-2">
                  <label htmlFor="" className="text-xl">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className={`border p-3 outline-none transition-all `}
                  />
                </div>
              </div>
              <textarea
                rows={7}
                name="message"
                required
                className={`border p-2   outline-none transition-all `}
                placeholder="Enter your message "
              />
              <Button
                type="submit"
                className="my-3 rounded-3xl !py-6 text-xl bg-baseGreen hover:bg-baseGreen/80 "
              >
                {loading ? (
                  <LoaderCircle
                    className="animate-spin text-center"
                    size={25}
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="p-[30px] md:p-[60px]">
        {" "}
        <Maps />{" "}
      </div> */}
    </div>
  );
};

export default ContactPage;
