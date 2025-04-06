"use client";
import { dataItems } from "@/static-data/staticdata";
import React from "react";
import SingleCard from "./single-card";
import { useGetAllProductQuery } from "@/app/apis/_product_index.api";
import { PaginationWithLinks } from "./paginationwithlinks";

const CardSection = ({ page }: { page: string }) => {
  const { data, isLoading, isError } = useGetAllProductQuery(
    parseInt((page as string) || "1")
  );
  if (isLoading) {
    return <p className="">loading..</p>;
  }

  return (
    <div className="">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 ">
        {data &&
          data?.message.allProducts.length &&
          data?.message.allProducts.map((item) => (
            <SingleCard key={item.id} {...item} />
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

export default CardSection;
