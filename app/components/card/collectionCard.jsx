import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const HorizontalCard = ({ data }) => {
  return (
    <div className="w-full h-full flex gap-1 justify-between p-5 bg-primary">
      <div className="self-end ">
        <h2 className="font-medium font-sans">{data.title}</h2>
        <Link
          className="font-bold font-sans flex gap-1 items-center"
          href={"#"}
        >
          <span>Continue</span>
          <span>
            <IoIosArrowRoundForward />
          </span>
        </Link>
      </div>
      <figure className="flex justify-end w-auto h-auto relative">
        <Image src={data.image} alt={data.title} height={120} width={150} />
      </figure>
    </div>
  );
};

const VerticalCard = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-5 bg-primary">
      <figure className="text-center w-full h-auto relative">
        <Image src={data.image} alt={data.title} width={500} height={400} />
      </figure>

      <div className="self-auto">
        <h2 className="font-medium font-sans">{data.title}</h2>
        <Link
          className="font-bold font-sans flex gap-1 items-center"
          href={"#"}
        >
          <span>Continue</span>
          <span>
            <IoIosArrowRoundForward />
          </span>
        </Link>
      </div>
    </div>
  );
};

const CollectionCard = {
  HorizontalCard: HorizontalCard,
  VerticalCard: VerticalCard,
};

export default CollectionCard;
