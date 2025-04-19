"use client";
import React from "react";
import SingleCard from "./single-card";
import { useGetAllProductQuery } from "@/app/apis/_product_index.api";
import { PaginationWithLinks } from "./paginationwithlinks";
import LoadingPage from "./loading";

const CardSection = ({ page }: { page: string }) => {
  const { data, isLoading, isError } = useGetAllProductQuery(
    parseInt((page as string) || "1")
  );

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="mb-7 px-3">
      <h1 className="text-[30px] font-semibold capitalize text-baseBlack  mx-auto my-5">
        Our Products
      </h1>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 ">
        {data &&
          data?.message.allProducts.length &&
          data?.message.allProducts.map((item) => (
            <SingleCard key={item.id} {...item} />
          ))}
      </div>

      {data?.message.count && (
        <PaginationWithLinks
          pageSize={Number(process.env.NEXT_PUBLIC_POST_PER_PAGE)}
          page={parseInt((page as string) || "1")}
          totalCount={data?.message.count as number}
        />
      )}
    </div>
  );
};

export default CardSection;
