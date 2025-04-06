"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const LoginForgotPasswordForm = () => {
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");

  return (
    <>
      <span
        onClick={() => setOpen(!open)}
        className="text-gray-600 text-sm cursor-pointer hover:text-[#17CF97] transition"
      >
        Forgot Password?
      </span>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid md:grid-cols-[1fr_auto] gap-4 mt-4 p-4 bg-white shadow-lg rounded-xl"
        >
          <input
            type="email"
            required
            value={verifyEmail}
            onChange={(e) => setVerifyEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 border rounded-lg text-gray-800 outline-none focus:border-blue-500"
          />
          <button
            type="button"
            disabled={loadingPassword || !verifyEmail.trim()}
            className="bg-[#17CF97] text-white font-medium px-4 py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600"
          >
            {loadingPassword ? "Sending..." : "Send"}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default LoginForgotPasswordForm;
