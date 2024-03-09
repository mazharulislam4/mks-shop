import ProductDetails from "@/components/productDetails/productDetails";
import CustomerReviews from "@/components/section/shop/customerReviews";
import Breadcrumb from "@/components/widgets/breadcrumb";
function ProductPage() {
  return (
    <>
      <div className="container">
        <Breadcrumb />
      </div>
      <section className="container py-8">
        <ProductDetails />
      </section>
      <section className="py-8">
        <div className="container">
          <CustomerReviews />
        </div>
      </section>
    </>
  );
}

export default ProductPage