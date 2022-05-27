import { useCartUtilities } from "@hooks/reusables/useCartUtilities.hook";
import Link from "next/link";
import React from "react";

const CartCheckoutCard = () => {
  const { calculateSubTotal } = useCartUtilities();

  const subtotal = calculateSubTotal();
  return (
    <div id="summary" className="w-full md:w-1/4 px-8 py-10 shadow-lg">
      <h1 className="font-semibold text-2xl border-b pb-4">Summary</h1>
      <div className="flex justify-between mt-3 mb-3">
        <span className=" text-sm capitalize">Sub-Total</span>
        <span className="font-semibold text-sm">
          ₦ {Number(subtotal).toLocaleString() || 0}
        </span>
      </div>
      <div className="flex justify-between mt-3 mb-3">
        <span className=" text-sm capitalize">Shipping Cost</span>
        <span className="font-semibold text-sm">₦250.00</span>
      </div>
      <div className="flex justify-between mt-3 mb-3">
        <span className=" text-sm capitalize">Discount (10%)</span>
        <span className="font-semibold text-sm">-₦500.00</span>
      </div>
      <div className="flex justify-between mt-3 mb-3">
        <span className=" text-sm capitalize">Tax</span>
        <span className="font-semibold text-sm">10%</span>
      </div>
      <div className="flex justify-between border-y border-jp-gray-100 py-3 mt-3 mb-3 items-center">
        <span className=" text-xs capitalize text-jp-gray-100">
          Apply Discount Code
        </span>
        <span className="font-semibold text-sm">
          <svg
            width={6}
            height={10}
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.17275 4.99984L0.34375 2.17184L1.75775 0.756836L6.00075 4.99984L1.75775 9.24284L0.34375 7.82784L3.17275 4.99984Z"
              fill="black"
            />
          </svg>
        </span>
      </div>
      <div className="flex justify-between mt-3 mb-3">
        <span className=" text-sm capitalize">Total</span>
        <span className="font-semibold text-sm">₦25,000.00</span>
      </div>
      {/* should be unhidden when you want to add a promo code */}
      <div className="py-10 hidden">
        <label
          htmlFor="promo"
          className="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          className="p-2 text-sm w-full"
        />
      </div>
      {/* the same as this  */}
      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase hidden">
        Apply
      </button>
      <div className="border-t mt-8">
        <Link href="/checkout" passHref>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartCheckoutCard;
