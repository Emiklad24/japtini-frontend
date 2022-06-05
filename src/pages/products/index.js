import React from "react";
import Layout from "@components/Layout/Layout";
import ProductCardSimple from "@components/ProductCardSimple/ProductCardSimple";
import { AnimatePresence, motion } from "framer-motion";
import { useGetProducts } from "@hooks/reusables/useGetProducts.hook";
import { productsServerSideEffect } from "src/PageServerSideEffects/products-ServerSideEffects";
import { useRouter } from "next/router";
import Pagination from "@components/Pagination/Pagination";

const Products = () => {
  const { query } = useRouter();
  const page = String(query?.page || 1);
  const { data } = useGetProducts(page);

  const products = data?.data || [];

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
              {data && data?.data
                ? products.map((product, i) => (
                    <AnimatePresence
                      key={product?.id || product?.name}
                      exitBeforeEnter
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: {
                            delay: (i + 1) * 0.2,
                          },
                        }}
                        exit={{ opacity: 0 }}
                      >
                        <ProductCardSimple product={product} />
                      </motion.div>
                    </AnimatePresence>
                  ))
                : null}
            </AnimatePresence>
          </div>
          <Pagination meta={data?.meta} />
        </div>
      </>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const page = ctx?.query?.page || String(1);
  return {
    props: {
      dehydratedState: await productsServerSideEffect(page),
    },
  };
}

export default Products;
