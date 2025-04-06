"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import AdminSideBar from "@/components/admin/admin-side-bar";

const Sales = dynamic(() => import("@/components/admin/sales-section/sales"));
const Products = dynamic(
  () => import("@/components/admin/product-section/products")
);
const Analytics = dynamic(
  () => import("@/components/admin/analytics/analytics")
);

const AdminPage = () => {
  const [selectedSection, setSelectedSection] = useState("products");

  const renderSection = () => {
    switch (selectedSection) {
      case "sales":
        return <Sales />;
      case "products":
        return <Products />;
      case "analytics":
        return <Analytics />;
      default:
        return (
          <div className="text-gray-500 text-center">Select a section</div>
        );
    }
  };

  return (
    <div className="flex gap-6 my-3 min-h-[100vh] ">
      <div className="h-full">
        <AdminSideBar
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      </div>

      <div className="flex-1">{renderSection()}</div>
    </div>
  );
};

export default AdminPage;
