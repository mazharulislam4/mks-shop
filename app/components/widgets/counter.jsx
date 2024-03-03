import { BiMinus, BiPlus } from "react-icons/bi";

function Counter() {
  return (
    <div className="flex w-full items-center bg-primary max-w-[70px] justify-between px-1 ">
      <span>
        <BiMinus />
      </span>
      <span className="font-bold font-inter text-small">1</span>
      <span>
        <BiPlus />
      </span>
    </div>
  );
}

export default Counter;
