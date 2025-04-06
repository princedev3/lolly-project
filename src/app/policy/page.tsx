"use client";

import { X } from "lucide-react";
import React, { useState } from "react";

const Policy = () => {
  const sections = {
    Introduction:
      "This is an introduction to our privacy policyThis is an introduction to our privacy policyThis is an introduction to our privacy policyThis is an introduction to our privacy policyThis is an introduction to our privacy policyThis is an introduction to our privacy policy...",
    "Data we collect":
      "We collect the following types of dataWe collect the following types of dataWe collect the following types of dataWe collect the following types of dataWe collect the following types of dataWe collect the following types of dataWe collect the following types of dataWe collect the following types of data",
    "How we use your data":
      "We use your data to improve your experience We use your data to improve your experienceWe use your data to improve your experienceWe use your data to improve your experienceWe use your data to improve your experienceWe use your data to improve your experienceWe use your data to improve your experienceWe use your data to improve your experienceWe use your data to improve your experienceWe use your data to improve your experience...",
    "How we share your information":
      "We share your data with trusted partners We share your data with trusted partnersWe share your data with trusted partnersWe share your data with trusted partnersWe share your data with trusted partnersWe share your data with trusted partners...",
    "Your choices & obligation":
      "You have control over your data You have control over your dataYou have control over your dataYou have control over your dataYou have control over your dataYou have control over your dataYou have control over your data...",
    "Other important information":
      "Additional privacy-related informationAdditional privacy-related informationAdditional privacy-related informationAdditional privacy-related informationAdditional privacy-related informationAdditional privacy-related informationAdditional privacy-related information...",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, quidem quod exercitationem aliquid rem ab nihil ipsum
            fuga quos ea, corrupti nesciunt praesentium vitae facere explicabo!
            Iusto sed perferendis repellat illum. Debitis doloremque iste
            obcaecati ducimus aspernatur.{" "}
            <span className="font-medium text-baseGreen mx-1 cursor-pointer">
              Cookie Policy
            </span>{" "}
            quaerat ab inventore!
            <span className="font-medium text-baseGreen ml-1 cursor-pointer">
              Help Center
            </span>
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
