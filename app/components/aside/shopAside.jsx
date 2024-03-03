import Link from "next/link";
import { MdOutlineFilterList } from "react-icons/md";
import Item from "./items"

function ShopAside() {
  return (
    <aside className="w-[var(--aside-width)] lg:block hidden  h-screen lg:top-[5px]  lg:sticky ">
      <button
        type="button"
        className="flex  items-center font-sans text-large  gap-1 mb-8 "
        aria-label="Filter Toggler"
      >
        <span className="text-[40px]">
          <MdOutlineFilterList />
        </span>
        <span className="text-regular font-medium">Filter</span>
      </button>

<Item/>




    </aside>
  );
}

export default ShopAside;
