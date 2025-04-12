import DiscountOverlay from "@/components/coupon/discountOverlay";
import CardSection from "@/components/navbar/card-section";
import HeroSection from "@/components/navbar/hero-section";
import Newsletter from "@/components/navbar/newsletter";
import React from "react";

interface Params {
  page?: string;
}
interface PageProps {
  searchParams: Promise<Params>;
}
const Home = async ({ searchParams }: PageProps) => {
  const { page } = await searchParams;
  return (
    <div className="flex flex-col gap-5 lg:gap-10">
      <DiscountOverlay />
      <HeroSection />
      <CardSection page={page as string} />
      <Newsletter />
    </div>
  );
};

export default Home;
