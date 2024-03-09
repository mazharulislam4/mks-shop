import ProductsSection from "@/app/components/section/shop/productSection";
import ShopTopBar from "@/app/components/topbar/shopTopbar";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Shop > ${decodeURIComponent(params.slag)}`,
  };
}

function CategoryShopPage({ params }) {
  return (
    <section className="w-full h-full relative">
      <div>
        <ShopTopBar title={decodeURIComponent(params.slag)} />
      </div>
      <ProductsSection />
    </section>
  );
}

export default CategoryShopPage;
