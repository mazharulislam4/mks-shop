import AddToCartBtn from "../widgets/addToCartBtn";
import Counter from "../widgets/counter";
import ReviewStars from "../widgets/reviewStarts";
import WishlistBtn from "../widgets/wishlistBtn";
function ProductInfo() {
  return (
    <div>
      <ReviewStars isLabel />
      <h2 className="my-3">Tray Table</h2>
      <p className="text-gray ">
        Buy one or buy a few and make every space where you sit more convenient.
        Light and easy to move around with removable tray top, handy for serving
        snacks.
      </p>

      <div className="flex my-3 gap-3">
        <span className="font-medium text-large ">$199.00</span>
        <del className="font-medium text-large text-gray">$400.00</del>
      </div>

      <div className="flex items-center gap-8 ">
        <div className="md:w-1/6">
          <Counter />
        </div>
        <div className="w-full">
          <WishlistBtn />
        </div>
      </div>

      <div className="my-5">
        <AddToCartBtn />
      </div>

      <div className="flex justify-between items-center  md:max-w-[40%]  mb-3">
        <span className="text-gray">SKU</span>
        <span>120xrg</span>
      </div>

      <div className="flex justify-between items-center  md:max-w-[40%]">
        <span className="text-gray">Category</span>
        <span>Shoes</span>
      </div>
    </div>
  );
}

export default ProductInfo;
