
import ShopTopBar from "../components/topbar/shopTopbar";

import ProductsSection from "../components/section/shop/productSection";
function ShopPage({ params }) {

  
  return (
    <>
      {/* product section  */}
      <section className="w-full h-full relative">
        <div>
          <ShopTopBar  title = "Shop" />
        </div>
        <ProductsSection />
      </section>
    </>
  );
}

export default ShopPage;
