import React from "react";
import cornPix from "@assets/images/products/corn.png";
import Image from "next/image";
import Link from "next/link";
import Layout from "@components/Layout/Layout";

const categories = () => {
  return (
    <Layout>
      <>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="font-bold text-sm leading-10">
            <span className="text-gray-400">Home</span> / Categories
          </div>
          <div className="font-bold text-3xl">Categories</div>
        </div>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:py-5 mb-10">
            <div>
              <div className="mr-4 h-36 transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border border-black flex justify-between items-center">
                <div className="w-1/2 text-center">
                  <div className="text-3xl font-bold text-jp-purple-100">
                    Plants
                  </div>
                  <div className="flex items-center gap-3 text-sm justify-center">
                    View More{" "}
                    <svg
                      className="w-3"
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L9 9L17 1"
                        stroke="#111111"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" w-1/2 h-full overflow-hidden">
                  <Image src={cornPix} alt="" className="h-full" />
                </div>
              </div>
            </div>
            <div>
              <div className="mr-4 h-36 transition py-5 px-10 duration-500 ease-in-out hover:bg-white hover:shadow-xl border border-black flex justify-between items-center">
                <div className="w-1/2">
                  <div className="text-3xl font-bold text-jp-purple-100">
                    Animal
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    View Less{" "}
                    <svg
                      className="w-3"
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L9 9L17 1"
                        stroke="#111111"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" w-1/2 h-full overflow-hidden">
                  <Image src={cornPix} alt="" className="h-full" />
                </div>
              </div>
            </div>
            <div>
              <div className="mr-4 h-36 transition py-5 px-10 duration-500 ease-in-out hover:bg-white hover:shadow-xl border border-black flex items-center">
                <div className="w-1/2">
                  <div className="text-3xl font-bold text-jp-purple-100">
                    Animal
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    View Less{" "}
                    <svg
                      className="w-3"
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L9 9L17 1"
                        stroke="#111111"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) ">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-white hover:shadow-xl border-half border-jp-gray-finese rounded-lg">
                <Link passHref href="/" className>
                  <div className="product-image h-auto md:h-2/3 w-full">
                    <Image src={cornPix} alt="" className="mx-auto" />
                  </div>
                </Link>
                <Link passHref href="/" className="text-gray-400 font-light">
                  Grain
                </Link>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="text-black">Mr Rice (Thai) (50kg)</div>
                </a>
                <div className="font-bold text-lg">₦5000.00</div>
                <a href="{{ route('product.show', $topdeal->id) }}">
                  <div className="rounded border border-jp-purple-100 py-4 mt-4 text-jp-purple-100 hover:text-white hover:bg-jp-purple-100 duration-200 transition-all text-center">
                    Buy Now
                  </div>
                </a>
              </div>
            </div>
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

export default categories;
