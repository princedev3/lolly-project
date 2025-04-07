"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Policy = () => {
  const sections = {
    Introduction:
      "At Lollys, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data you share with us when you use our website or services.",
    "Data we collect":
      "We ONLY collect personal data that you voluntarily provide to us, including your name, email address, phone number, and delivery information when you place an order, sign up for our newsletter, or contact us directly.",
    "How we use your data":
      "We use the data we collect to process and fulfill your orders, communicate with you regarding your purchases or inquiries, and send promotional emails or newsletters if you have subscribed. Additionally, your data helps us improve our website, products, and overall customer experience. It also enables us to ensure the security and integrity of our platform, and to comply with applicable legal and regulatory obligations.",
    "How we share your information":
      "Legal authorities, if we are required to do so by law, court order, or to respond to a legal process.",
    "Your choices & obligation":
      "You have control over your personal data and how it's used. You may update, correct, or delete your personal information by contacting us directly. If you no longer wish to receive marketing emails or newsletters, you can unsubscribe at any time using the link provided in our emails. Additionally, you can manage or disable cookies and tracking technologies through your browser settings.",
    "Other important information":
      "Your privacy is important to us. This Privacy Policy outlines the types of information we collect, how we use it, and the choices you have regarding your data. By using our website or services, you agree to the terms outlined here. We are committed to protecting your personal information and ensuring transparency in how it is handled.",
  } as const;

  type SectionKeys = keyof typeof sections;
  const [activeSection, setActiveSection] = useState<SectionKeys | null>(null);

  return (
    <div>
      {/* Header Section */}
      <div className="h-[100px] bg-baseGreen w-full flex items-center justify-center flex-col motion-preset-blur-right ">
        <p className="capitalize text-3xl text-white font-normal">
          Privacy Policy
        </p>
        <div className="text-white text-center gap-2">
          To learn more about our privacy, please visit our
          <span className="font-medium underline ml-1 cursor-pointer">
            Privacy Hub
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-y-6 my-5 md:p-10">
        <div className="grid gap-y-6 self-start">
          <div className="text-sm text-gray-600">
            <p>Effective March 30, 2025</p>
            <p>Our Privacy Policy has been updated.</p>
          </div>
          <h1 className="text-3xl text-gray-600">Your Privacy Matters</h1>
          <p className="text-sm text-gray-600 text-justify">
            At Lollys, your privacy is a top priority. We are committed to
            handling your personal information with care, transparency, and
            respect. This Privacy Policy outlines what data we collect, how we
            use it, and the choices you have. Our goal is to ensure your
            experience with us is not only enjoyable but also secure.
            <span className="font-medium text-baseGreen mx-1 cursor-pointer">
              Cookie Policy
            </span>{" "}
            and
            <Link
              href={"/contact"}
              className="font-medium text-baseGreen ml-1 cursor-pointer"
            >
              Help Center
            </Link>
          </p>
        </div>

        <div className="grid self-start md:justify-center w-full">
          <div className="max-w-[300px] grid w-full h-full border p-5">
            <p className="text-lg font-medium text-gray-600 mb-4">
              Table of Contents:
            </p>
            <div className="grid gap-y-2">
              {Object.keys(sections).map((section) => (
                <p
                  key={section}
                  className={`font-light text-baseGreen capitalize cursor-pointer transition duration-200 ${
                    activeSection === section ? "font-semibold" : ""
                  }hover:underline `}
                  onClick={() => setActiveSection(section as SectionKeys)}
                >
                  {section}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center mt-5 z-50">
        <div
          className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] p-5 bg-white shadow-lg rounded-lg transition-transform duration-500 ${
            activeSection ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            className="absolute top-2 right-4 text-gray-500 text-lg font-bold cursor-pointer"
            onClick={() => setActiveSection(null)}
          >
            <X />
          </button>
          <h2 className="text-xl font-bold text-baseGreen">{activeSection}</h2>
          <p className="text-gray-600 mt-2">
            {activeSection !== null && sections[activeSection]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
