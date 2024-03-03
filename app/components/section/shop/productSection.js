import ProductCard from "../../card/productCard";

function ProductsSection() {
  return (
    <div className="grid gap-8 w-full h-full justify-center lg:grid-cols-[repeat(3,minmax(0,1fr))] md:grid-cols-[repeat(3,minmax(0,1fr))]  sm:grid-cols-[repeat(2,minmax(0,1fr))]  grid-rows-[repeat(auto-fit,fit-content)] ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductsSection;
