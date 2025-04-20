"use client";
import { privacyInfo } from "@/static-data/staticdata";
import React from "react";

const Policy = () => {
  return (
    <div className="w-full max-w-3xl mx-auto shadow-lg p-5 md:p-10">
      <h1 className="text-3xl text-baseGreen text-center py-3 font-medium">
        Privacy
      </h1>
      <div className="grid gap-y-6">
        {privacyInfo.map((item) => (
          <div key={item.id} className="grid gap-y-1">
            <div className="flex items-center gap-5 border-b border-baseBlack/40 pl-3 text-xl font-semibold">
              <span className="">{item.id}. </span>
              <span className="">{item.title} </span>
            </div>
            <div className="">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;
