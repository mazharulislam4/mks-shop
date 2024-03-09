"use client";
import { isFilterBtnActive } from "@/utils/uiUtis";
import { useHookstate } from "@hookstate/core";
import { RxCross1 } from "react-icons/rx";
import Items from "../aside/items";

function FilterDrawer() {
  const state = useHookstate(isFilterBtnActive);
  const isActive = state.get().isActive;

  
  const onOverlayClickToCloseHandler = (e) => {
    if (e.currentTarget === e.target) {
      isFilterBtnActive.set((prev) => ({ isActive: !prev.isActive }));
    }
  };

  return (
    <div
      className={`fixed top-0 transition-all duration-500 left-0 ${
        isActive ? "opacity-1 " : "opacity-0 pointer-events-none"
      }  w-full h-screen  bg-overlay overflow-hidden`}
      onClick={onOverlayClickToCloseHandler}
    >
      <div
        className={`${
          isActive
            ? "w-[var(--aside-width)] opacity-1"
            : "max-w-[0] w-0 opacity-0"
        }  bg-white h-screen px-4 pt-[8rem]  relative transition-all duration-300 `}
      >
        <div className="absolute text-medium w-10 h-10 flex items-center justify-center rounded-full bg-primary  top-4 right-0">
          <button
            type="button"
            aria-label="filter drawer close button"
            onClick={(e) => {
             e.stopPropagation();
              isFilterBtnActive.set((prev) => ({ isActive: !prev.isActive }));
            }}
          >
            <RxCross1 />
          </button>
        </div>
        <Items />
      </div>
    </div>
  );
}
export default FilterDrawer;
