/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import useUserCart from "@store/userCart.store";
import shallow from "zustand/shallow";

const CartProductCard = ({ product }) => {
  const { addToCart, removeProductFromCart } = useUserCart(
    (state) => ({
      cart: state.cart,
      addToCart: state.addToCart,
      removeProductFromCart: state.removeProductFromCart,
    }),
    shallow
  );
  return (
    <div className="flex items-center border-b border-gray-200 hover:bg-gray-100 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={product.img || ""} alt={product.name} />
        </div>
        <div className="flex flex-col gap-2 justify-center ml-4 flex-grow">
          <span className="font-bold">{product.name || ""}</span>
          <span className="text-gray-500 text-xs">Weight: 30kg</span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        <input
          className="mx-2 border text-center w-8"
          type="number"
          defaultValue={product.quantity}
        />

        <svg
          className="fill-current text-gray-600 w-3"
          viewBox="0 0 448 512"
          onClick={() => addToCart(product)}
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        ₦ {Number(product?.price * product.quantity || 0).toLocaleString() || 0}
      </span>
      <span
        className="cursor-pointer"
        onClick={() => removeProductFromCart(product)}
      >
        <svg
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00072 5.58623L11.9507 0.63623L13.3647 2.05023L8.41472 7.00023L13.3647 11.9502L11.9507 13.3642L7.00072 8.41423L2.05072 13.3642L0.636719 11.9502L5.58672 7.00023L0.636719 2.05023L2.05072 0.63623L7.00072 5.58623Z"
            fill="#A0A19C"
          />
        </svg>
      </span>
    </div>
  );
};

CartProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartProductCard;
