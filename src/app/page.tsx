import { Suspense } from "react";
import Slider from "./_Components/Slider";
import Categories from "./_Components/Categories";
import PromoBanners from "./_Components/PromoBanners";
import FeaturesSection from "./_Components/FeaturesSection";
import FeaturedProducts from "./_Components/FeaturedProducts";
import Newsletter from "./_Components/Newsletter";
import { getAllProducts } from "./home.services";
import { Spinner } from "@/components/ui/spinner";

async function ProductsSection() {
  const allProducts = await getAllProducts();
  return <FeaturedProducts products={allProducts} title="Featured" coloredTitle="Products" />;
}

export default function Home() {
  return (
    <>
      <div className="bg-[#F9FAFB]">
        <Slider />
      </div>
      <FeaturesSection />
      <Categories />
      <PromoBanners />
      <Suspense fallback={<div className="flex justify-center items-center py-20"><Spinner className="size-8" /></div>}>
        <ProductsSection />
      </Suspense>
      <Newsletter />
    </>
  );
}
