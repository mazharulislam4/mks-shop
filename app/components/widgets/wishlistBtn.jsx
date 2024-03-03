import { Button } from "@nextui-org/react";
import { AiOutlineHeart } from "react-icons/ai";


function WishlistBtn() {
  return (
    <Button className="w-full text-medium " variant="bordered" radius="sm">
      <span className="font-medium align-middle">
        <AiOutlineHeart />
      </span>
      Wishlist
    </Button>
  );
}

export default WishlistBtn;
