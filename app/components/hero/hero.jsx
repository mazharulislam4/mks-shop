/* eslint-disable jsx-a11y/alt-text */
import { getImageProps } from "next/image";
import Link from "next/link";
import heroImageMobile from "../../assets/Paste image mobile.png";
import heroImage from "../../assets/Paste image.png";

function Hero() {
  const common = { alt: "Hero Image", width: 600, height: 600, priority: true };
  const {
    props: { srcSet: mHeroImg },
  } = getImageProps({ src: heroImageMobile, ...common });
  const {
    props: { srcSet: dHeroImg, ...rest },
  } = getImageProps({ src: heroImage, ...common });

  return (
    <div aria-label="Hero Section" className="bg-black  h-full">
      <div className="container  ">
        <div className="flex w-full flex-col lg:flex-row overflow-hidden  md:justify-between  justify-center items-center lg:gap-2 gap-20">
          {/* hero text  */}
          <div className="lg:order-1 order-2 pb-10">
            <h1
              className="text-white text-xLarge leading-[1.2]"
              style={{ maxInlineSize: "20ch" }}
            >
              More Than Just a game. It&apos;s a lifestyle.
            </h1>
            <p className="text-white mt-3  " style={{ maxInlineSize: "50ch" }}>
              Whether you’re just starting out, have played your whole life or
              you&apos;re a Tour pro, your swing is like a fingerprint.
            </p>

            {/* button  */}
            <div className="mt-[30px]">
              <Link className="btn" href={"/shop"}>
                Shopping now
              </Link>
            </div>
          </div>
          {/* image  */}
          <div className="lg:order-2 order-1 w-full h-full relative  flex flex-col items-center justify-center ">
            <picture>
              <source
                srcSet={mHeroImg}
                media="(max-width: 768px)"
                sizes="(min-width: 768px) 350px, 100vw"
              />
              <source
                media="(min-width: 768px)"
                srcSet={dHeroImg}
                sizes="(min-width: 768px) 570px, 100vw"
              />

              <img
                src={rest.src}
                alt={rest.alt}
                style={{width: "auto" , height:"auto"}}
                className="object-cover"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
