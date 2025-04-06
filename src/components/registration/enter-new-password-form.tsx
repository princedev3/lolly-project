"use client";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const EnterNewPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form action="" className="grid gap-y-4">
      <div className="grid gap-y-1">
        <label htmlFor="" className="text-xl capitalize text-gray-600">
          enter new password:
        </label>
        <div className="relative w-full">
          <input
            type={showPassword ? "password" : "text"}
            name="password"
            className="py-1 px-2 text-gray-700 outline-none border border-gray-400 w-full  rounded-2xl"
          />
          {showPassword ? (
            <Eye
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-0 text-gray-500 translate-y-[20%] cursor-pointer"
            />
          ) : (
            <EyeOff
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-gray-500 right-6 top-0 translate-y-[20%] cursor-pointer"
            />
          )}
        </div>
      </div>
      <button
        className="w-full bg-[#17CF97] py-2 cursor-pointer rounded-2xl text-white font-semibold capitalize "
        type="submit"
      >
        new password
      </button>
    </form>
  );
};

export default EnterNewPasswordForm;
