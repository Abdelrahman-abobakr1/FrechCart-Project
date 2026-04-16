import Categories from "../_Components/Categories";
import FeaturedProducts from "../_Components/FeaturedProducts";
import Newsletter from "../_Components/Newsletter";
import PromoBanners from "../_Components/PromoBanners";
import Slider from "../_Components/Slider";
import { getAllProducts } from "../home.services";


export default async function Home() {

  const allProducts = await getAllProducts();



  return (
    <>
      <div className="bg-[#F9FAFB]">
        <Slider />
      </div>
      <Categories />
      <PromoBanners />
      <FeaturedProducts products={allProducts} title="Featured" coloredTitle="Products" />
      <Newsletter />
    </>
  );
}
