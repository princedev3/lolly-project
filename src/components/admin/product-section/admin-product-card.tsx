"use client";
import React from "react";
import { dataItems } from "@/static-data/staticdata";
import AdminSingleCard from "./admin-single-card";
import { useGetAllProductQuery } from "@/app/apis/_product_index.api";
import { useSearchParams } from "next/navigation";
import { PaginationWithLinks } from "@/components/navbar/paginationwithlinks";

const AdminProductCard = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") as string;

  const { data, isLoading, isError } = useGetAllProductQuery(
    parseInt((page as string) || "1")
  );
  if (isLoading) {
    return <p className="">loading..</p>;
  }
  return (
    <div className="grid gap-y-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {data &&
          data.message?.allProducts.map((item) => (
            <AdminSingleCard key={item.id} {...item} />
          ))}
      </div>
      {data?.message.count && (
        <PaginationWithLinks
          pageSize={8}
          page={parseInt((page as string) || "1")}
          totalCount={data?.message.count as number}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
