import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import shoes1 from "../../assets/blog/shoes.png";

function BlogCard() {
  return (
    <div className="w-full h-auto ">
      <figure className="w-full h-auto">
        <Image src={shoes1} alt="Shoes" className="object-cover w-full h-auto" />
      </figure>

      <h3 className="my-2">Air Jordan x Travis Scott Event</h3>

      <Link href={"#"} className="flex items-center gap-2 font-bold ">
        <span>Read More</span>
        <span>
          <IoIosArrowRoundForward />
        </span>
      </Link>
    </div>
  );
}

export default BlogCard;
