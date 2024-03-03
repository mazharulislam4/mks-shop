"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import img3 from "../../assets/category/img (3).png";
import img4 from "../../assets/category/img (4).png";

const images = [img3, img4];

function ProductImageView() {
  return (
    <div className="w-full">
      <div className="h-fit">
        <MainActiveSlider />
      </div>
    </div>
  );
}

export default ProductImageView;

// main active slider

export const MainActiveSlider = () => {
  let sliderRef = useRef(null);
  let magnifierRef = useRef(null);
  const [slideHeight, setSlideHeight] = useState(0);
  const [activeSlider, setActiveSlider] = useState(0);

  useEffect(() => {
    setSlideHeight(sliderRef?.innerSlider.list.offsetHeight);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots w-full relative slick-thumbnails",
    customPaging: (i) => <ThumbnailSlider images={images} i={i} />,
    nextArrow: <ArrowNext parentHeight={slideHeight} />,
    prevArrow: <ArrowPrev parentHeight={slideHeight} />,
    afterChange: (current) => setActiveSlider(current),
  };

  // mouse move

  function mouseMove(e) {
    e.stopPropagation();
    const x = e.pageX;
    const y = e.pageY;
    const img = e.currentTarget.getElementsByTagName("img")[0];
    const imgWidth = img ? img.offsetWidth : 0;
    const imgHeight = img ? img.offsetHeight : 0;
    const xWidth = (x / imgWidth) * 100;
    const yHeight = (y / imgHeight) * 100;

    magnifierRef.current.style.transform = `translatex(${x}px)  translatey(${y}px)`;
    magnifierRef.current.style.display = "block";
    magnifierRef.current.style.backgroundRepeat = "none";
    magnifierRef.current.style.backgroundImage = `url('${images[activeSlider].src}')`;
    magnifierRef.current.style.backgroundPosition = `${xWidth}% ${yHeight}%`;
    magnifierRef.current.style.backgroundSize = `${
      (imgWidth / xWidth) * 100
    }px ${(imgHeight / yHeight) * 100}px`;
  }

  function mouseLeave(e) {
    magnifierRef.current.style.display = "none";
  }

  return (
    <div className="w-full h-full slider-container  ">
      {/* magnifier */}

      <div
        ref={magnifierRef}
        className={`magnifier pointer-events-none hidden  bg-origin-padding   w-[200px] h-[200px]  border border-teal-400 absolute top-0 left-0 z-10`}
      ></div>

      <Slider
        {...sliderSettings}
        ref={(slider) => {
          sliderRef = slider;
        }}
        className="w-full h-full "
      >
        {images.map((img, index) => (
          <figure
            key={index}
            className="w-full h-full  relative "
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
          >
            <Image
              src={img}
              alt="thumbnails"
              className="w-full h-full object-cover  "
            />
          </figure>
        ))}
      </Slider>
    </div>
  );
};

export const ThumbnailSlider = ({ images, i, onClick }) => {
  return (
    <figure className="w-full h-full cursor-pointer  " onClick={onClick}>
      <Image src={images[i]} alt="thumbnails" className="w-full h-full " />
    </figure>
  );
};

// slider arrow button
export const ArrowNext = ({ onClick }) => {

  return (
    <button
      type="button"
      className={`absolute top-[40%] right-[-10px] z-10 shadow-md  w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full transform translate-y-[-40%] `}
      onClick={onClick}
    >
      <FaAngleRight />
    </button>
  );
};

export const ArrowPrev = ({ onClick }) => {
  return (
    <button
      type="button"
      className={`absolute top-[40%] left-[-10px] z-10 shadow-md  w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full transform translate-y-[-40%]`}
      onClick={onClick}
    >
      <FaAngleLeft />
    </button>
  );
};
