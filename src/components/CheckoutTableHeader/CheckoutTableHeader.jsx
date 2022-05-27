import React from "react";

const CheckoutTableHeader = () => {
  return (
    <div className="flex border-b border-gray-200 pb-5 mb-5">
      <h3 className="font-semibold text-gray-600 text-xs capitalize w-2/5">
        Item
      </h3>
      <h3 className="font-semibold text-gray-600 text-xs capitalize w-1/5 text-center">
        Quantity
      </h3>
      <h3 className="font-semibold text-gray-600 text-xs capitalize w-1/5 text-center">
        Sub-Total
      </h3>
    </div>
  );
};

export default CheckoutTableHeader;
