import Provider from "@/Provider";
import register_placeholder from "@/assets/register placeholder.png";
import Logo from "@/components/logo";
import { inter, open_sans } from "@/fonts";
import "@/globals.css";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const metadata = {
  description: "World best e-commerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${open_sans.variable}`}>
      <body>
        <Provider>
          <div>
            <div className="h-screen w-full flex lg:flex-row flex-col ">
              <div className="lg:w-1/2 relative w-full bg-primary flex flex-col h-auto justify-center items-center">
                <div className="flex justify-center absolute top-0 left-0 w-full z-[1] ">
                  <Logo />
                </div>

                <figure className="w-full h-fit relative z-0">
                  <Image
                    src={register_placeholder}
                    alt="mks shop register page"
                    width={687}
                    height={599}
                    className="relative"
                    priority={false}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    placeholder="blur"
                  />
                </figure>
              </div>
              <main className="lg:w-1/2  w-full lg:my-auto  mx-auto  lg:px-[90px] px-8 mt-8  ">
                {children}
              </main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
