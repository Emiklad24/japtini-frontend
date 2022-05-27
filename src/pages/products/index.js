import React from "react";
import Layout from "@components/Layout/Layout";
import ProductCardSimple from "@components/ProductCardSimple/ProductCardSimple";
import { AnimatePresence, motion } from "framer-motion";
import { useGetProducts } from "@hooks/reusables/useGetProducts.hook";
import { productsServerSideEffect } from "src/PageServerSideEffects/products-ServerSideEffects";

const Products = () => {
  const {
    data: { data },
  } = useGetProducts();

  return (
    <Layout>
      <>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="font-bold text-sm leading-10">
            <span className="text-gray-400">Home</span> / Products
          </div>
          <div className="font-bold text-3xl">Products</div>
        </div>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:py-5 mb-10">
            <AnimatePresence>
              {data
                ? data.map((product, i) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          delay: (i + 1) * 0.2,
                        },
                      }}
                      exit={{ opacity: 0 }}
                      key={product.id}
                    >
                      <ProductCardSimple product={product} />
                    </motion.div>
                  ))
                : null}
            </AnimatePresence>
          </div>
          <div className="flex gap-10 text-xs text-gray-400 items-center justify-center">
            Showing 1-10 of 30 Items
            <div className="flex gap-3">
              <div className="rounded bg-purple-100 border border-purple-200 text-center py-2 px-3 text-sm">
                1
              </div>
              <div className="rounded border border-purple-200 text-center py-2 px-3 text-sm">
                2
              </div>
              <div className="rounded border border-purple-200 text-center py-2 px-3 text-sm">
                3
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      dehydratedState: await productsServerSideEffect(),
    },
  };
}

export default Products;
