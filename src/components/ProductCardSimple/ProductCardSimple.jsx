/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ProductCardSimple = ({ product }) => {
  return (
    <div>
      <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
        <Link passHref href={`/products/${product.slug}`}>
          <div className="product-image h-auto md:h-2/3 w-full">
            <img
              src={product?.img || ""}
              alt={product?.name || ""}
              className="mx-auto"
            />
          </div>
        </Link>
        <span className="text-gray-400 font-light">Grain</span>
        <span>
          <div className="text-black">{product?.name || ""}</div>
        </span>
        <div className="font-bold text-lg">
          ₦ {Number(product?.price || 0).toLocaleString()}
        </div>
        <motion.div
          whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link passHref href={`/products/${product.slug}`}>
            <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center cursor-pointer">
              Buy Now
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
ProductCardSimple.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCardSimple;
