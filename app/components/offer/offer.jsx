import Image from "next/image";
import placeholderImage from "../../assets/Image Placeholder.png";

function Offer() {
  return (
    <div className="w-full h-auto bg-black">
      <div className="lg:flex lg:gap-[50px] ">
        <div className="w-1/2 lg:block hidden">
          <figure className="w-full h-full">
            <Image
              src={placeholderImage}
              alt="golf field"
              className="object-cover w-full h-full"
            />
          </figure>
        </div>

        <div className="lg:w-1/2 lg:px-10  py-10 flex flex-col justify-center items-center w-full  ">
          <div className="container  text-center lg:text-start ">
            <h3 className="text-secondary uppercase">Limited Edition</h3>
            <h2 className="text-xLarge text-white py-4">Hurry up! 30% OFF</h2>
            <p className="text-medium text-white pb-6">
              Find clubs that are right for your game
            </p>
            <button type="button" className="btn w-fit">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
