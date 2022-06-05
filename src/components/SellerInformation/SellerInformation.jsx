import React from "react";
import PropTypes from "prop-types";

const SellerInformation = ({ data }) => {
  return (
    <div className="border-b border-gray-100 md:px-0 px-4 w-full md:w-1/5">
      <div>
        <div className="text-sm font-medium border-b border-gray-300 flex justify-between py-2 items-center">
          Seller Information
          <svg
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.17168 6.99999L0.22168 2.04999L1.63568 0.635986L7.99968 6.99999L1.63568 13.364L0.22168 11.95L5.17168 6.99999Z"
              fill="#383933"
            />
          </svg>
        </div>
        <div className="mt-3 text-black font-medium text-xs">
          {data?.shop?.name || ""}
        </div>
        <div className="my-2 text-jp-gray-min text-ll">85% Seller</div>
        <div className="flex gap-3 items-center justify-between">
          <div className="text-jp-gray-min text-ll">150 Followers</div>
          <button className="rounded px-5 py-1 text-xs border border-jp-purple-100 text-jp-purple-100">
            Follow
          </button>
        </div>
        <div className="mt-3 text-black font-medium text-xs flex gap-3 items-center border-t border-gray-300 py-3">
          Seller Performance
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334ZM9.00033 15.6667C10.7684 15.6667 12.4641 14.9644 13.7144 13.7141C14.9646 12.4639 15.667 10.7682 15.667 9.00008C15.667 7.23197 14.9646 5.53628 13.7144 4.28604C12.4641 3.03579 10.7684 2.33341 9.00033 2.33341C7.23222 2.33341 5.53652 3.03579 4.28628 4.28604C3.03604 5.53628 2.33366 7.23197 2.33366 9.00008C2.33366 10.7682 3.03604 12.4639 4.28628 13.7141C5.53652 14.9644 7.23222 15.6667 9.00033 15.6667ZM8.16699 11.5001H9.83366V13.1667H8.16699V11.5001ZM8.16699 4.83342H9.83366V9.83342H8.16699V4.83342Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex items-center text-ll leading-6 gap-3">
          <svg
            className="w-4"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={10} cy={10} r={10} fill="#57D175" />
            <path
              d="M10.0003 14.6344L4.8505 17.5171L6.0005 11.7284L1.66699 7.72125L7.528 7.02613L10.0003 1.66675L12.4727 7.02613L18.3337 7.72125L14.0002 11.7284L15.1502 17.5171L10.0003 14.6344Z"
              fill="white"
            />
          </svg>
          Store Quality:<span className="font-medium">Excellent</span>
        </div>
        <div className="flex items-center text-ll leading-6 gap-3">
          <svg
            className="w-4"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={10} cy={10} r={10} fill="#57D175" />
            <path
              d="M10.0003 14.6344L4.8505 17.5171L6.0005 11.7284L1.66699 7.72125L7.528 7.02613L10.0003 1.66675L12.4727 7.02613L18.3337 7.72125L14.0002 11.7284L15.1502 17.5171L10.0003 14.6344Z"
              fill="white"
            />
          </svg>
          Order Fulfillment:
          <span className="font-medium">Excellent</span>
        </div>
        <div className="flex items-center text-ll leading-6 gap-3">
          <svg
            className="w-4"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={10} cy={10} r={10} fill="#57D175" />
            <path
              d="M10.0003 14.6344L4.8505 17.5171L6.0005 11.7284L1.66699 7.72125L7.528 7.02613L10.0003 1.66675L12.4727 7.02613L18.3337 7.72125L14.0002 11.7284L15.1502 17.5171L10.0003 14.6344Z"
              fill="white"
            />
          </svg>
          Customer Satisfaction: <span className="font-medium">Excellent</span>
        </div>
        <button className="flex gap-3 my-3 p-3 text-xs text-jp-purple-100  items-center justify-between bg-gray-50 w-full">
          Click here to become a seller
          <svg
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.17168 6.99999L0.22168 2.04999L1.63568 0.635986L7.99968 6.99999L1.63568 13.364L0.22168 11.95L5.17168 6.99999Z"
              fill="#5463FF"
            />
          </svg>
        </button>
      </div>
      <div />
    </div>
  );
};

SellerInformation.propTypes = {
  data: PropTypes.object,
};

export default SellerInformation;
