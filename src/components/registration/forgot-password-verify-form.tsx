"use client";
import React from "react";
import { BeatLoader } from "react-spinners";

const ForgotPasswordVerifyForm = () => {
  return (
    <form action="" className="grid mx-auto">
      <div className="flex items-center gap-1">
        <span className="font-semibold text-[#17CF97] text-xl">
          Verifying Email
        </span>
        <BeatLoader size={10} color="#17CF97" />
      </div>
    </form>
  );
};

export default ForgotPasswordVerifyForm;
