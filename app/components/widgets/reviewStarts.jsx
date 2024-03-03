import { BiSolidStar } from "react-icons/bi";

function Reviews({ isLabel = true, classNames }) {
  return (
    <div className="flex gap-3 items-center">
      <ul
        aria-label="Reviews"
        className={`${
          classNames?.fontSize ? classNames.fontSize : "text-medium"
        } flex gap-1 items-center`}
      >
        <li>
          <BiSolidStar />
        </li>
        <li>
          <BiSolidStar />
        </li>
        <li>
          <BiSolidStar />
        </li>
        <li>
          <BiSolidStar />
        </li>
        <li>
          <BiSolidStar />
        </li>
      </ul>
      {isLabel && <span className="text-gray text-small">11 Reviews</span>}
    </div>
  );
}

export default Reviews;
