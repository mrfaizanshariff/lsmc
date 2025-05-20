import Hero from "@/components/home/hero";
import FeaturedProducts from "@/components/home/featured-products";
import About from "@/components/home/about";
import ProductCategories from "@/components/home/product-categories";
import Testimonials from "@/components/home/testimonials";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full p-4">
      <Hero />
      <About />
      <ProductCategories />
      <FeaturedProducts />
      <Testimonials />
      <Contact />
    </div>
  );
}