"use client";
import React from "react";
import CreateCoupons from "./create-coupons";
import { Trash2 } from "lucide-react";

const Coupon = () => {
  const isLoading = false;
  const data = [{}, {}];
  return (
    <div className="grid gap-y-4">
      <CreateCoupons />

      <div className="grid gap-y-6 ">
        {isLoading ? (
          <span className="text-gray-700 ">Loading...</span>
        ) : (
          data &&
          data.length > 0 && (
            <div className="">
              <table className="w-full border-collapse border border-gray-300 table-fixed">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border  hidden lg:table-cell  border-gray-300 px-4 py-2  text-center capitalize">
                      Desc
                    </th>
                    <th className="border hidden lg:table-cell border-gray-300 px-4 py-2  text-center capitalize">
                      Discount
                    </th>
                    <th className="border  border-gray-300 px-4 py-2  text-center capitalize">
                      expires
                    </th>
                    <th className="border border-gray-300 px-4 py-2  text-center capitalize">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100 group">
                    <td className="border hidden lg:table-cell border-gray-300 px-4 py-2 whitespace-nowrap text-center">
                      {/* {data && (data[0]?.desc as string)} */}
                    </td>
                    <td className="border hidden lg:table-cell border-gray-300 px-4 py-2 whitespace-nowrap text-center">
                      {/* {data && data[0]?.discount} */}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 whitespace-nowrap text-center">
                      {/* {data &&
                    data[0]?.expiryDate &&
                    new Date() > new Date(data[0].expiryDate)
                      ? "Coupon has expired"
                      : "Coupon is still valid"} */}
                    </td>
                    <td className="border border-gray-300 px-4 whitespace-nowrap text-center py-2 relative">
                      <Trash2 className="text-red-500 grid mx-auto cursor-pointer" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Coupon;
