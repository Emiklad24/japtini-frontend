import React from "react";
import { useGetProducts } from "@hooks/reusables/useGetProducts.hook";
import ProductCard from "@components/ProductCard/ProductCard";
import { AnimatePresence, motion } from "framer-motion";

const FeaturedProductsBanner = () => {
  const {
    data: { data },
  } = useGetProducts();

  const featuredProducts = data.filter((product) => product.featured === 1);

  return (
    <div className="bg-giftshop-white pt-10 max-w-6xl mt-0 md:mt-15 mx-auto px-10 md:px-0">
      <div>
        <div className=" uppercase font-bold text-2xl leading-heading  py-10 md:py-20">
          Featured Products
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:py-5 mb-10">
        <AnimatePresence>
          {data &&
            featuredProducts &&
            featuredProducts.map((product, i) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: (i + 1) * 0.5,
                  },
                }}
                exit={{ opacity: 0 }}
                key={product.id}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FeaturedProductsBanner;
