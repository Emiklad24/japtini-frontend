/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Layout from "@components/Layout/Layout";
import ProductCardSimple from "@components/ProductCardSimple/ProductCardSimple";
import Ratings from "@components/Ratings/Ratings";
import { useCartUtilities } from "@hooks/reusables/useCartUtilities.hook";
import { useGetSingleProduct } from "@hooks/reusables/useGetSingleProduct.service";
import { getAllProducts } from "@services/getAllProducts.service";
import { getSingleProduct } from "@services/getSingleProduct.service";
import queryKeys from "@utils/queryKeys";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { dehydrate, QueryClient } from "react-query";

const ProductsSlug = () => {
  const { data } = useGetSingleProduct();
  const [quantity, setQuantity] = useState(1);
  const { addToCartHandler } = useCartUtilities();
  return (
    <Layout>
      <>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="block md:flex gap-0">
            <div className="md:px-0 px-4 w-full md:w-2/5">
              <img
                src={data?.img || ""}
                alt={data?.name || ""}
                className="mx-auto"
              />
            </div>
            <div className="border-b border-gray-100 md:px-0 px-4 w-full md:w-2/5">
              <div>
                <div className="text-2xl font-bold ">{data?.name}</div>
                <div className="flex my-2">
                  <svg
                    className="w-4"
                    width={24}
                    height={23}
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z"
                      fill="#FFA500"
                    />
                  </svg>
                  <svg
                    className="w-4"
                    width={24}
                    height={23}
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z"
                      fill="#FFA500"
                    />
                  </svg>
                  <svg
                    className="w-4"
                    width={24}
                    height={23}
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z"
                      fill="#FFA500"
                    />
                  </svg>
                  <svg
                    className="w-4"
                    width={24}
                    height={23}
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z"
                      fill="#FFA500"
                    />
                  </svg>
                  <svg
                    className="w-4"
                    width={24}
                    height={23}
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z"
                      fill="black"
                      fillOpacity="0.15"
                    />
                  </svg>
                </div>
                <div className="text-jp-gray-min my-3 font-medium text-sm">
                  {data?.description || ""}
                </div>
                <div className="my-6 flex gap-6 items-center">
                  <div>
                    <div className="font-medium">Size (Kg)</div>
                    <div className="text-jp-gray-min text-sm">In Stock</div>
                  </div>
                  <div className="flex gap-3">
                    <span className="rounded border border-green-50 px-3 py-1">
                      1
                    </span>
                    <span className="rounded border border-green-50 px-3 py-1">
                      2
                    </span>
                    <span className="rounded border border-green-50 px-3 py-1">
                      3
                    </span>
                  </div>
                </div>
                <div className="font-medium text-2xl my-3">
                  ₦ {Number(data?.price || 0).toLocaleString()}
                </div>
                <div className="flex gap-3 w-3/4 my-7">
                  <div className="w-1/2">
                    <input
                      type="number"
                      name="cart-number"
                      id
                      className="rounded p-3 border border-gray-100 w-full"
                      value={quantity.toFixed()}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </div>
                  <div className="w-1/2">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        position: "relative",
                        zIndex: 2,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        className="rounded p-3 text-xs text-white capitalize bg-jp-purple-100 font-medium w-full flex items-center gap-3 justify-center"
                        onClick={() =>
                          addToCartHandler({ ...data, quantity: quantity })
                        }
                      >
                        Add to Cart
                        <svg
                          className="w-3"
                          width={20}
                          height={21}
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0.5C11.5913 0.5 13.1174 1.16541 14.2426 2.34985C15.3679 3.53429 16 5.14074 16 6.81579V7.86842H20V9.97368H18.833L18.076 19.5347C18.0552 19.7978 17.9413 20.043 17.7568 20.2218C17.5723 20.4006 17.3308 20.4999 17.08 20.5H2.92C2.66925 20.4999 2.4277 20.4006 2.24322 20.2218C2.05875 20.043 1.94481 19.7978 1.924 19.5347L1.166 9.97368H0V7.86842H4V6.81579C4 5.14074 4.63214 3.53429 5.75736 2.34985C6.88258 1.16541 8.4087 0.5 10 0.5ZM16.826 9.97368H3.173L3.84 18.3947H16.159L16.826 9.97368ZM11 12.0789V16.2895H9V12.0789H11ZM7 12.0789V16.2895H5V12.0789H7ZM15 12.0789V16.2895H13V12.0789H15ZM10 2.60526C8.97376 2.60526 7.98677 3.02046 7.24319 3.76497C6.4996 4.50949 6.05631 5.52636 6.005 6.60526L6 6.81579V7.86842H14V6.81579C14 5.73553 13.6056 4.6966 12.8983 3.91388C12.191 3.13116 11.225 2.66454 10.2 2.61053L10 2.60526Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                </div>
                <div className="flex gap-8 my-3 py-3 text-sm items-center">
                  <button className="flex text-sm gap-3 items-center">
                    <svg
                      width={20}
                      height={19}
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 0C17.538 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.36 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.934 15.604C11.815 15.048 12.61 14.495 13.354 13.903C16.335 11.533 18 8.943 18 6C18 3.64 16.463 2 14.5 2C13.424 2 12.26 2.57 11.414 3.414L10 4.828L8.586 3.414C7.74 2.57 6.576 2 5.5 2C3.56 2 2 3.656 2 6C2 8.944 3.666 11.533 6.645 13.903C7.39 14.495 8.185 15.048 9.066 15.603C9.365 15.792 9.661 15.973 10 16.175C10.339 15.973 10.635 15.792 10.934 15.604Z"
                        fill="#A0A19C"
                      />
                    </svg>
                    Wishlist
                  </button>
                  <button className="flex gap-3 items-center">
                    <svg
                      width={19}
                      height={20}
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5757 15.2711L6.46571 12.4841C5.97521 12.971 5.35153 13.3018 4.6733 13.4347C3.99508 13.5677 3.29267 13.4969 2.65464 13.2312C2.0166 12.9655 1.4715 12.5169 1.08806 11.9419C0.704619 11.3669 0.5 10.6912 0.5 10.0001C0.5 9.30898 0.704619 8.63331 1.08806 8.0583C1.4715 7.48329 2.0166 7.03468 2.65464 6.76901C3.29267 6.50335 3.99508 6.43253 4.6733 6.56548C5.35153 6.69844 5.97521 7.02921 6.46571 7.51611L11.5757 4.72911C11.4005 3.90685 11.527 3.04897 11.9323 2.31236C12.3376 1.57576 12.9945 1.00964 13.7828 0.717544C14.5712 0.425446 15.4383 0.426885 16.2257 0.721597C17.0131 1.01631 17.6681 1.5846 18.0709 2.32255C18.4737 3.0605 18.5975 3.91879 18.4195 4.74046C18.2415 5.56214 17.7737 6.2923 17.1016 6.79741C16.4295 7.30252 15.5981 7.54884 14.7593 7.49131C13.9206 7.43378 13.1305 7.07625 12.5337 6.48411L7.42371 9.27111C7.52565 9.75177 7.52565 10.2485 7.42371 10.7291L12.5337 13.5161C13.1305 12.924 13.9206 12.5664 14.7593 12.5089C15.5981 12.4514 16.4295 12.6977 17.1016 13.2028C17.7737 13.7079 18.2415 14.4381 18.4195 15.2598C18.5975 16.0814 18.4737 16.9397 18.0709 17.6777C17.6681 18.4156 17.0131 18.9839 16.2257 19.2786C15.4383 19.5733 14.5712 19.5748 13.7828 19.2827C12.9945 18.9906 12.3376 18.4245 11.9323 17.6879C11.527 16.9513 11.4005 16.0934 11.5757 15.2711Z"
                        fill="#BCBDB9"
                      />
                    </svg>
                    Share
                  </button>
                </div>
              </div>
              <div />
            </div>
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
                  Rabiu Stores
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
                  Customer Satisfaction:{" "}
                  <span className="font-medium">Excellent</span>
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
          </div>
          <ul
            className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
            id="tabs-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-description"
                className="
nav-link
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
active
    "
                id="tabs-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-home"
                role="tab"
                aria-controls="tabs-home"
                aria-selected="true"
              >
                Description
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-characteristics"
                className="
nav-link
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
    "
                id="tabs-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-messages"
                role="tab"
                aria-controls="tabs-messages"
                aria-selected="false"
              >
                Characteristics
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-review"
                className="
nav-link
disabled
pointer-events-none
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
    "
                id="tabs-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-review"
                role="tab"
                aria-controls="tabs-review"
                aria-selected="false"
              >
                Review
              </a>
            </li>
          </ul>
          <div className="tab-content" id="tabs-tabContent">
            <div
              className="hidden tab-pane fade show active"
              id="tabs-home"
              role="tabpanel"
              aria-labelledby="tabs-home-tab"
            >
              Devon King's Oil is a pure, clean, Cholesterol Free, protein-rich
              and Vitamins A &amp; E natural cooking oil that is widely used in
              homes and catering and hospitality establishments for the
              preparation/cooking of delight-some meals and salads. By using
              Devon King's cooking oil at home or in your catering and
              hospitality establishment, you can be sure to provide nourishing
              and masterfully created tasty meals.
            </div>
            <div
              className="hidden tab-pane fade"
              id="tabs-profile"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab"
            >
              <div className="font-medium text-2xl text-black">
                Product Information
              </div>
              <div className="mt-4">
                <div className=" border border-slate-300 text-left pl-4">
                  Product Details
                </div>
                <table className="border-collapse border border-slate-400 w-full table-fixed">
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 text-left pl-4 py-1 font-light text-sm">
                        Brand/Name
                      </td>
                      <td className="border border-slate-300 text-center py-1 font-light text-sm">
                        King's Vegetable Oil
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 text-left pl-4 py-1 font-light text-sm">
                        Weight/Congos/Pieces
                      </td>
                      <td className="border border-slate-300 text-center pr-10 py-1 font-light text-sm">
                        25Kg
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 text-left pl-4 py-1 font-light text-sm">
                        Region/Farm
                      </td>
                      <td className="border border-slate-300 text-center pr-10 py-1 font-light text-sm">
                        Nigeria
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 text-left pl-4 py-1 font-light text-sm">
                        Type/Species
                      </td>
                      <td className="border border-slate-300 text-center pr-10 py-1 font-light text-sm">
                        Vegetable Oil
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 text-left pl-4 py-1 font-light text-sm">
                        Display Size
                      </td>
                      <td className="border border-slate-300 text-center pr-10 py-1 font-light text-sm">
                        25Kg
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <Ratings />
          </div>
          <div className="capitalize font-medium text-2xl leading-heading  py-5">
            Recommended
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:py-5 mb-10">
            <AnimatePresence>
              {data
                ? data.recommended.map((product, i) => (
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
        </div>
      </>
    </Layout>
  );
};

export async function getStaticProps(ctx) {
  const { GET_SINGLE_PRODUCT_KEY } = queryKeys;
  const { productSlug } = ctx.params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [GET_SINGLE_PRODUCT_KEY, productSlug],
    queryFn: getSingleProduct,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export async function getStaticPaths() {
  const products = await getAllProducts();
  const paths = products?.data?.map((product) => ({
    params: { productSlug: product.slug },
  }));

  return { paths, fallback: "blocking" };
}

export default ProductsSlug;
