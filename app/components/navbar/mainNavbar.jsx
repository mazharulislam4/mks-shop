"use client";
import { Badge } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { LiaUserCircleSolid } from "react-icons/lia";
import navdata from "../../assets/mainNav";
import CartDrawer from "../drawer/cartDrawer";
import Logo from "../logo";
// import

function MainNavbar() {
  const [toggle, setToggle] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const cartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="  lg:border-0 border-b-[2px] border-red-50 ">
        <div className=" mx-auto container z-50 flex justify-between items-center py-3 px-2 h-[var(--primary-nav-width)]  ">
          {/* brand  */}
          <div className="flex items-center gap-4 ">
            <button
              type="button"
              aria-label="Menu"
              className="text-black lg:hidden flex items-center justify-center"
              onClick={toggleHandler}
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={26}
                height={26}
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>

            <div style={{ width: "auto", height: "auto" }}>
              <Logo />
            </div>
            {/* hamburger / toggler  */}
          </div>

          <nav className="lg:block hidden ">
            <ul className="flex gap-8 font-inter nav-font-size capitalize text-center items-center">
              {navdata.map((data) => (
                <li key={data.id}>
                  <Link href={data.link}>{data?.page}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* left  menu  */}
          <div>
            <ul className="inline-flex items-center gap-4">
              <li className="text-medium-icon hidden md:block">
                <Link
                  href={"/account"}
                  className="align-middle block pt-1"
                  prefetch
                  aria-label="Search Icon"
                >
                  <IoSearch />
                </Link>
              </li>
              <li className="text-medium-icon hidden md:block">
                <button className="align-middle" aria-label="Search Icon">
                  <LiaUserCircleSolid />
                </button>
              </li>
              <li className="text-medium-icon">
                <button
                  type="button"
                  className="align-middle  flex items-start justify-center"
                  aria-label="Cart Button"
                  onClick={cartOpenHandler}
                >
                  <Badge size="md" content="5">
                    <span className="text-[21px]">
                      <CgShoppingBag />
                    </span>
                  </Badge>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* side menu  */}
        {/* overlay  */}

        <div
          onClick={toggleHandler}
          className={`absolute w-screen lg:hidden h-screen bg-black transition-[opacity] delay-100 ease-in  duration-300 top-0 left-0  ${
            toggle
              ? "opacity-25 pointer-events-auto"
              : "opacity-0 pointer-events-none "
          }`}
        ></div>

        <div
          className={`fixed h-screen bg-primary top-0 left-0 w-[18.75rem] lg:hidden transition-all duration-300 ease-linear ${
            toggle ? "ml-0" : "ml-[calc(-100%-18.75rem)]"
          }  z-50`}
        >
          <div aria-label="Side Menu">
            {/* close button  */}
            <div className="w-[30px] mt-2 ml-auto mr-[-15px] h-[30px] flex flex-col items-center justify-center rounded-full bg-red-400">
              <button className="text-white" type="button" aria-label="close">
                <svg
                  aria-hidden="true"
                  width={25}
                  height={25}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  fill="white"
                  onClick={toggleHandler}
                >
                  {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </button>
            </div>

            <nav className="lg:hidden mt-[calc(var(--primary-nav-width)+10px)] ">
              <ul className="flex flex-col gap-8 font-inter nav-font-size capitalize text-center items-center">
                {navdata.map((data) => (
                  <li key={data.id}>
                    <Link href={data.link}>{data?.page}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* cart drawer  */}

      <CartDrawer isActive={isCartOpen} onClose={cartOpenHandler} />
    </>
  );
}

export default MainNavbar;
