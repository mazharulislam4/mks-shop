import ProductImageView from '../ui/productImageView';
import ProductInfo from '../ui/productInfo';


function ProductDetails() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-12 ">
        <div className="md:w-3/5">
          <ProductImageView />
        </div>
        <div className="md:w-2/5">
          <ProductInfo />
        </div>
      </div>
    </>
  );
}

export default ProductDetails