"use client";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import CartItem from "../cart/cartItem";
import Drawer from "./drawer";

function CartDrawer({ isActive, onClose }) {
  return (
    <Drawer
      isActive={isActive}
      onClose={onClose}
      placement="right"
      classNames={{ innerWrapper: "w-[var(--cart-drawer-width)]" }}
    >
      <div className="flex flex-col h-full ">
        <h3 className="mb-6 font-medium">Cart</h3>

        <div className="max-h-[60vh]">
          <CartItem />
        </div>

        <div className="mt-8">
          {/* subtotal  */}
          <div>
            <div className="flex items-center  justify-between">
              <span>Subtotal</span>
              <span className="font-medium">$990.90</span>
            </div>
            <Divider className="my-3" />
            <div className="flex items-center  justify-between">
              <span className="font-medium">Total</span>
              <span className="font-medium">$990.90</span>
            </div>
          </div>

          <Link
            href={"#"}
            className="btn bg-black text-white block w-full mt-8 text-center "
          >
            Checkout
          </Link>
          <Link href={"/cart"} className="text-center block mt-3 ">
            View cart
          </Link>
        </div>
      </div>
    </Drawer>
  );
}
export default CartDrawer;
