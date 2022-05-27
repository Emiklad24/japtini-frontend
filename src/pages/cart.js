import React from "react";
import CartProductCard from "@components/CartProductCard/CartProductCard";
import CartCheckoutCard from "@components/CartCheckoutCard/CartCheckoutCard";
import CheckoutTableHeader from "@components/CheckoutTableHeader/CheckoutTableHeader";
import Layout from "@components/Layout/Layout";
import useUserCart from "@store/userCart.store";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const Cart = () => {
  const cart = useUserCart((state) => state.cart);
  const router = useRouter();
  return (
    <Layout>
      <>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="font-bold text-3xl">Shopping Cart</div>
        </div>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="block md:flex my-4 gap-3">
            <div className="w-full md:w-3/4 bg-white">
              <CheckoutTableHeader />

              <AnimatePresence>
                {cart.map((product) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layoutId={product.id}
                    key={product.id}
                  >
                    <CartProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>

              <a
                href="#"
                className="flex font-semibold text-jp-purple-100 text-sm mt-10 rounded border border-jp-purple-100 px-2 py-3 items-center md:w-1/4 w-1/2 lg:w-1/5"
                onClick={() => router.back()}
              >
                <svg
                  className="fill-current mr-2 text-jp-purple-100 w-4"
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.828 7.00023L7.778 11.9502L6.364 13.3642L0 7.00023L6.364 0.63623L7.778 2.05023L2.828 7.00023Z"
                    fill="#5463FF"
                  />
                </svg>
                Continue Shopping
              </a>
            </div>
            <CartCheckoutCard />
          </div>
        </div>
      </>
    </Layout>
  );
};
export default Cart;
