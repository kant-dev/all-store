import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import { FeaturedProducts } from "@/components/layout/Sections/FeaturedProducts";
import HeroSection from "@/components/layout/Sections/HeroSection";
import ShopCategories from "@/components/layout/Sections/ShopCategories";

export default function Home() {

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header/>
      <HeroSection/>
      <ShopCategories/>
      <FeaturedProducts/>
      <Footer/>
    </div>
  );
}
