/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import imagePix from "@assets/images/products/Image.png";
import Link from "next/link";
import { useCartUtilities } from "@hooks/reusables/useCartUtilities.hook";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const { cart } = useCartUtilities();
  return (
    <header>
      <nav>
        <div className="max-w-6xl mx-auto hidden md:flex gap-8 items-center p-4">
          <div>
            <Link href="/" passHref className="cursor-pointer">
              <svg
                width={260}
                height={70}
                viewBox="0 0 260 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  id="Group 15 1"
                  width={260}
                  height={70}
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_96_1700"
                      transform="scale(0.00213675 0.00793651)"
                    />
                  </pattern>
                  <image
                    id="image0_96_1700"
                    data-name="Group 15.png"
                    width={468}
                    height={126}
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </Link>
            <img className="md:hidden block" src="../img/Image.png" alt="" />
          </div>
          <div className="md:flex justify-between w-full hidden">
            <form className="flex w-1/2">
              <div className="rounded border border-jp-gray-200 p-1 px-4">
                <select
                  name=""
                  id=""
                  className="bg-white py-3 px-5 font-medium "
                >
                  <option value="all">All</option>
                </select>
              </div>
              <div className="rounded border border-jp-gray-200 p-1 w-full">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search..."
                  className="placeholder:text-black p-3 w-full"
                />
              </div>
            </form>
            <div className="flex gap-3">
              <button className="p-3 flex items-center gap-3 font-medium">
                Help{" "}
                <svg
                  className="ml-3"
                  width={10}
                  height={6}
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00081 5.99977L0.757812 1.75677L2.17281 0.342773L5.00081 3.17177L7.82881 0.342773L9.24381 1.75677L5.00081 5.99977Z"
                    fill="black"
                  />
                </svg>
              </button>
              <Link href="/cart" passHref>
                <button className="p-4 rounded border border-jp-gray-200 ">
                  <svg
                    width={20}
                    height={19}
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C11.5913 0 13.1174 0.632141 14.2426 1.75736C15.3679 2.88258 16 4.4087 16 6V7H20V9H18.833L18.076 18.083C18.0552 18.3329 17.9413 18.5658 17.7568 18.7357C17.5723 18.9055 17.3308 18.9999 17.08 19H2.92C2.66925 18.9999 2.4277 18.9055 2.24322 18.7357C2.05875 18.5658 1.94481 18.3329 1.924 18.083L1.166 9H0V7H4V6C4 4.4087 4.63214 2.88258 5.75736 1.75736C6.88258 0.632141 8.4087 0 10 0ZM16.826 9H3.173L3.84 17H16.159L16.826 9ZM11 11V15H9V11H11ZM7 11V15H5V11H7ZM15 11V15H13V11H15ZM10 2C8.97376 2 7.98677 2.39444 7.24319 3.10172C6.4996 3.80901 6.05631 4.77504 6.005 5.8L6 6V7H14V6C14 4.97376 13.6056 3.98677 12.8983 3.24319C12.191 2.4996 11.225 2.05631 10.2 2.005L10 2Z"
                      fill="#111111"
                    />
                  </svg>
                  <AnimatePresence exitBeforeEnter>
                    {cart.length !== 0 && (
                      <motion.div
                        initial="pageInitial"
                        animate="pageAnimate"
                        variants={{
                          pageInitial: {
                            opacity: 0,
                          },
                          pageAnimate: {
                            opacity: 1,
                            transition: {
                              duration: 0.5,
                            },
                          },
                          pageExit: {
                            opacity: 0,
                          },
                        }}
                        exit="pageExit"
                        key={cart.length}
                      >
                        <span className="relative w-5 h-5 rounded-full bg-red-700 text-white -top-2 -right-2 text-sm font-sans flex align-center justify-center">
                          <span> {cart.length}</span>
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Link>
              <Link href="/user-profile" passHref>
                <button className="p-4 rounded border border-jp-gray-200">
                  <svg
                    width={16}
                    height={21}
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H14C14 19.4087 13.3679 17.8826 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z"
                      fill="#111111"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex md:hidden justify-between items-center p-4">
          <Link href="/" passHref>
            <div id="logo" className="cursor-pointer">
              <Image className="md:hidden block" src={imagePix} alt="" />
            </div>
          </Link>
          <div>
            <div className="flex gap-3">
              <button className="p-4 ">
                <svg
                  width={20}
                  height={19}
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C11.5913 0 13.1174 0.632141 14.2426 1.75736C15.3679 2.88258 16 4.4087 16 6V7H20V9H18.833L18.076 18.083C18.0552 18.3329 17.9413 18.5658 17.7568 18.7357C17.5723 18.9055 17.3308 18.9999 17.08 19H2.92C2.66925 18.9999 2.4277 18.9055 2.24322 18.7357C2.05875 18.5658 1.94481 18.3329 1.924 18.083L1.166 9H0V7H4V6C4 4.4087 4.63214 2.88258 5.75736 1.75736C6.88258 0.632141 8.4087 0 10 0ZM16.826 9H3.173L3.84 17H16.159L16.826 9ZM11 11V15H9V11H11ZM7 11V15H5V11H7ZM15 11V15H13V11H15ZM10 2C8.97376 2 7.98677 2.39444 7.24319 3.10172C6.4996 3.80901 6.05631 4.77504 6.005 5.8L6 6V7H14V6C14 4.97376 13.6056 3.98677 12.8983 3.24319C12.191 2.4996 11.225 2.05631 10.2 2.005L10 2Z"
                    fill="#111111"
                  />
                </svg>
              </button>
              <button className="p-4 ">
                <svg
                  width={16}
                  height={21}
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H14C14 19.4087 13.3679 17.8826 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z"
                    fill="#111111"
                  />
                </svg>
              </button>
              <button className="">
                <svg
                  className="mr-4"
                  width={16}
                  height={14}
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 0.333008H15.5V1.99967H0.5V0.333008ZM0.5 6.16634H15.5V7.83301H0.5V6.16634ZM0.5 11.9997H15.5V13.6663H0.5V11.9997Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
