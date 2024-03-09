"use client";

import { isFilterBtnActive } from "@/utils/uiUtis";
import { BiSolidGrid } from "react-icons/bi";
import { CiGrid2H, CiGrid2V } from "react-icons/ci";
import { HiViewGrid } from "react-icons/hi";
import { MdOutlineFilterList } from "react-icons/md";

function ShopTopBar({ title }) {
  return (
    <div className="flex  lg:flex-row flex-col items-center gap-4 mb-8">
      <div className="flex  order-2 lg:order-1 items-start justify-between w-full">
        <h3 className="text-large font-sans font-medium">{title}</h3>
        {/* sort by  */}
        <div>
          <label htmlFor="sort_by" className="font-medium mr-1">
            Sort By:
          </label>
          <select name="sort_by" id="sort_by">
            <option value={"Default"}>Default</option>
            <option value={"New Arrival"}>New Arrival</option>
            <option value={"Best Selling"}>Best Selling</option>
          </select>
        </div>
      </div>

      <div className="flex items-center order-1 lg:order-2 lg:w-fit justify-between w-full">
        {/* filter  */}

        <button
          type="button"
          className="lg:hidden text-large items-center flex gap-1"
          aria-label="Filter Toggler"
          onClick={() => {
            isFilterBtnActive.set((prev) => ({ isActive: !prev.isActive }));
          }}
        >
          <span>
            <MdOutlineFilterList />
          </span>
          <span className="text-medium font-medium">Filter</span>
        </button>

        <ul className="flex items-center text-large  gap-2">
          <li className="lg:block hidden">
            <button type="button">
              <BiSolidGrid />
            </button>
          </li>
          <li className="lg:block hidden">
            <button type="button">
              <HiViewGrid />
            </button>
          </li>
          <li className="lg:hidden">
            <button type="button">
              <CiGrid2V />
            </button>
          </li>
          <li className="lg:hidden">
            <button type="button">
              <CiGrid2H />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShopTopBar;
