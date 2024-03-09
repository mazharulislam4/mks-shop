"use client";

import { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

function Drawer({
  isActive,
  onClose,
  classNames = {},
  overlay = "blur",
  children,
  placement = "left",
}) {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [isActive]);

  const onOverlayClickToCloseHandler = (e) => {
    if (e.currentTarget === e.target && isActive) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed top-0 transition-all z-[9999] duration-500 left-0 ${
        isActive ? "opacity-1 " : "opacity-0  pointer-events-none"
      } ${
        overlay == "blur" ? "backdrop-blur-[2px]" : ""
      }  w-full h-screen  bg-overlay  overflow-hidden  flex flex-col ${
        placement === "right" ? "items-end" : "items-start"
      } `}
      onClick={onOverlayClickToCloseHandler}
    >
      <div
        className={`${
          isActive
            ? "w-[var(--aside-width)] right-0 opacity-1 " +
              classNames.innerWrapper
            : "opacity-0 right-[-100%]"
        }  bg-white h-screen px-4 opacity-100  relative transition-all pt-2  duration-300  ease-in-out `}
      >
        <button
          type="button"
          aria-label="filter drawer close button"
          onClick={onClose}
          className={`${classNames.closeBtn} ${
            placement === "left"
              ? "relative right-[calc(-100%-20px)]"
              : "left-[-50px]"
          }  text-medium shadow-lg bg-black w-[30px] h-[30px] flex items-center justify-center text-white rounded-full`}
        >
          <RxCross1 />
        </button>

        <div>{children}</div>
      </div>
    </div>
  );
}

export default Drawer;
