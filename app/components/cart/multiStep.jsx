"use client";
import { useRef, useState } from "react";

const steps = [
  {
    id: 0,
    label: "Checkout",
    key: "checkout",
    component: () => <div>Hello1</div>,
  },
  {
    id: 1,
    label: "address",
    key: "address",
    component: () => <div>address</div>,
  },
  ,
  {
    id: 2,
    label: "confirm",
    key: "confirm",
    component: () => <div>confirm</div>,
  },
];

function CartPageTab({ index = 0 }) {
  const tabsListRef = useRef(null);
  const [activeStepIndex, setActiveIndex] = useState(index);

  const components = steps.map((value, index) => ({
    id: index,
    component: <value.component />,
  }));

  const activeIndexHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="py-8 container">
      <div
        ref={tabsListRef}
        className="inline-flex items-center gap-10 relative "
      >
        {steps.map((value, index, arr) => (
          <button
            key={value.key}
            onClick={() => activeIndexHandler(index)}
            type="button"
            className="w-full"
          >
            <div className="flex items-center gap-5 ">
              <span className="w-[30px]  h-[30px] bg-black inline-flex justify-center items-center text-white rounded-full ">
                {index + 1}
              </span>
              <span> {value.label}</span>
            </div>
            {/* border bottom  */}
            <span
              style={{ width: `calc(100% / ${arr.length} * 100)` }}
              className={`block ${
                activeStepIndex === index ? "opacity-100" : "opacity-0"
              }  h-[2px] bg-black absolute top-[calc(100%+5px)] left-0 transition-all duration-500 ease-linear  `}
            ></span>
          </button>
        ))}
      </div>

      {components[activeStepIndex]?.component && (
        <div className="mt-6">{components[activeStepIndex].component}</div>
      )}
    </div>
  );
}

export default CartPageTab;
