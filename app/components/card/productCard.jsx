import Image from "next/image";
import Link from "next/link";
import { BiSolidStar } from "react-icons/bi";
import glabss from "../../assets/product/glabss.png";


function ProductCard({ minwidth }) {
  const widthStyle = { minWidth: minwidth ? minwidth + "px" : "100%" };

  return (
    <div className={`bg-white `} style={widthStyle}>
      {/* image  */}
      <div className="relative">
        <figure className="relative">
          <Image src={glabss} alt="product image" className="w-full h-auto" />
        </figure>

        {/* hot  */}
        <div className="absolute top-2 left-2">
          <div className="bg-white w-fit px-4 py-1 rounded-sm ">
            <span className="text-regular font-extrabold text-black">HOT</span>
          </div>
          <div className="bg-secondary w-fit px-4 py-1 rounded-sm mt-2 ">
            <span className="text-regular font-extrabold text-white">-50%</span>
          </div>
        </div>
      </div>

      {/* content  */}
      <div className="py-2">
        <ul
          aria-label="Reviews"
          className="text-medium flex gap-1 items-center"
        >
          <li>
            <BiSolidStar />
          </li>
          <li>
            <BiSolidStar />
          </li>
          <li>
            <BiSolidStar />
          </li>
          <li>
            <BiSolidStar />
          </li>
          <li>
            <BiSolidStar />
          </li>
        </ul>

        <Link className="block text-medium mt-2 font-medium" href={"#"}>
          Shark - Men&apos;s cabretta white golf glove
        </Link>
        <span className="text-medium font-medium">$19.00</span>
      </div>
    </div>
  );
}

export default ProductCard;
