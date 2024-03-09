import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import img1 from "../../assets/product/glabss.png";
import Counter from "../widgets/counter";

function CartItem() {
  return (
    <div className="border-b border-b-primary  pb-6">
      <div className="inline-flex justify-between w-full">
        <div className="flex gap-3 items-center">
          <figure className="w-[80px] h-[96px] relative ">
            <Image
              src={img1}
              alt="carted product"
              className="w-full h-auto object-cover"
            />
          </figure>

          <div className="flex flex-col gap-[10px]">
            <h4>Tray Table</h4>
            <span className="text-small text-gray">Color: Black</span>
            <Counter />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-medium">$19.19</span>
          <button
            type="button"
            aria-label="cart item remove button"
            className="self-end"
          >
            <RxCross1 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
