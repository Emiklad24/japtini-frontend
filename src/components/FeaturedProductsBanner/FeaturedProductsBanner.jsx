import React from "react";
import cornPix from "@assets/images/products/corn.png";
import Image from "next/image";
import Link from "next/link";

const FeaturedProductsBanner = () => {
  return (
    <div className="bg-giftshop-white pt-10 max-w-6xl mx-auto mt-10 px-10 md:px-0">
      <div>
        <div className=" uppercase font-bold text-2xl leading-heading py-10 md:py-20">
          Featured Products
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:py-5 mb-10">
        <div>
          <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-giftshop-white hover:shadow-xl border-2 border-jp-gray-min rounded-lg">
            <Link passHref href="/" className>
              <div className="product-image h-auto md:h-2/3 bg-jp-gray-light w-full">
                <Image src={cornPix} alt="" className="mx-auto" />
              </div>
            </Link>
            <Link passHref href="/">
              <div className="rounded border-2 border-black text-center py-1 my-4">
                <div className="text-sm text-black font-light">Corn</div>
              </div>
            </Link>
            <Link passHref href="/">
              <div className="buy-button rounded-l border-2 border-black my-4">
                <div className="md:text-sm text-xs text-black font-bold flex justify-between">
                  <div className="pl-4 py-1 w-1/2">₦5000.00</div>
                  <div className="text-white px-4 py-1 w-1/2 ">Buy Now</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-giftshop-white hover:shadow-xl border-2 border-jp-gray-min rounded-lg">
            <Link passHref href="/" className>
              <div className="product-image h-auto md:h-2/3 bg-jp-gray-light w-full">
                <Image src={cornPix} alt="" className="mx-auto" />
              </div>
            </Link>
            <Link passHref href="/">
              <div className="rounded border-2 border-black text-center py-1 my-4">
                <div className="text-sm text-black font-light">Corn</div>
              </div>
            </Link>
            <Link passHref href="/">
              <div className="buy-button rounded-l border-2 border-black my-4">
                <div className="md:text-sm text-xs text-black font-bold flex justify-between">
                  <div className="pl-4 py-1 w-1/2">₦5000.00</div>
                  <div className="text-white px-4 py-1 w-1/2 ">Buy Now</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-giftshop-white hover:shadow-xl border-2 border-jp-gray-min rounded-lg">
            <Link passHref href="/" className>
              <div className="product-image h-auto md:h-2/3 bg-jp-gray-light w-full">
                <Image src={cornPix} alt="" className="mx-auto" />
              </div>
            </Link>
            <Link passHref href="/">
              <div className="rounded border-2 border-black text-center py-1 my-4">
                <div className="text-sm text-black font-light">Corn</div>
              </div>
            </Link>
            <Link passHref href="/">
              <div className="buy-button rounded-l border-2 border-black my-4">
                <div className="md:text-sm text-xs text-black font-bold flex justify-between">
                  <div className="pl-4 py-1 w-1/2">₦5000.00</div>
                  <div className="text-white px-4 py-1 w-1/2 ">Buy Now</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-giftshop-white hover:shadow-xl border-2 border-jp-gray-min rounded-lg">
            <Link passHref href="/" className>
              <div className="product-image h-auto md:h-2/3 bg-jp-gray-light w-full">
                <Image src={cornPix} alt="" className="mx-auto" />
              </div>
            </Link>
            <Link passHref href="/">
              <div className="rounded border-2 border-black text-center py-1 my-4">
                <div className="text-sm text-black font-light">Corn</div>
              </div>
            </Link>
            <Link passHref href="/">
              <div className="buy-button rounded-l border-2 border-black my-4">
                <div className="md:text-sm text-xs text-black font-bold flex justify-between">
                  <div className="pl-4 py-1 w-1/2">₦5000.00</div>
                  <div className="text-white px-4 py-1 w-1/2 ">Buy Now</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-giftshop-white hover:shadow-xl border-2 border-jp-gray-min rounded-lg">
            <Link passHref href="/" className>
              <div className="product-image h-auto md:h-2/3 bg-jp-gray-light w-full">
                <Image src={cornPix} alt="" className="mx-auto" />
              </div>
            </Link>
            <Link passHref href="/">
              <div className="rounded border-2 border-black text-center py-1 my-4">
                <div className="text-sm text-black font-light">Corn</div>
              </div>
            </Link>
            <Link passHref href="/">
              <div className="buy-button rounded-l border-2 border-black my-4">
                <div className="md:text-sm text-xs text-black font-bold flex justify-between">
                  <div className="pl-4 py-1 w-1/2">₦5000.00</div>
                  <div className="text-white px-4 py-1 w-1/2 ">Buy Now</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-giftshop-white hover:shadow-xl border-2 border-jp-gray-min rounded-lg">
            <Link passHref href="/" className>
              <div className="product-image h-auto md:h-2/3 bg-jp-gray-light w-full">
                <Image src={cornPix} alt="" className="mx-auto" />
              </div>
            </Link>
            <Link passHref href="/">
              <div className="rounded border-2 border-black text-center py-1 my-4">
                <div className="text-sm text-black font-light">Corn</div>
              </div>
            </Link>
            <Link passHref href="/">
              <div className="buy-button rounded-l border-2 border-black my-4">
                <div className="md:text-sm text-xs text-black font-bold flex justify-between">
                  <div className="pl-4 py-1 w-1/2">₦5000.00</div>
                  <div className="text-white px-4 py-1 w-1/2 ">Buy Now</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-giftshop-white hover:shadow-xl border-2 border-jp-gray-min rounded-lg">
            <Link passHref href="/" className>
              <div className="product-image h-auto md:h-2/3 bg-jp-gray-light w-full">
                <Image src={cornPix} alt="" className="mx-auto" />
              </div>
            </Link>
            <Link passHref href="/">
              <div className="rounded border-2 border-black text-center py-1 my-4">
                <div className="text-sm text-black font-light">Corn</div>
              </div>
            </Link>
            <Link passHref href="/">
              <div className="buy-button rounded-l border-2 border-black my-4">
                <div className="md:text-sm text-xs text-black font-bold flex justify-between">
                  <div className="pl-4 py-1 w-1/2">₦5000.00</div>
                  <div className="text-white px-4 py-1 w-1/2 ">Buy Now</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="mr-4 h-auto transition p-5 duration-500 ease-in-out hover:bg-giftshop-white hover:shadow-xl border-2 border-jp-gray-min rounded-lg">
            <Link passHref href="/" className>
              <div className="product-image h-auto md:h-2/3 bg-jp-gray-light w-full">
                <Image src={cornPix} alt="" className="mx-auto" />
              </div>
            </Link>
            <Link passHref href="/">
              <div className="rounded border-2 border-black text-center py-1 my-4">
                <div className="text-sm text-black font-light">Corn</div>
              </div>
            </Link>
            <Link passHref href="/">
              <div className="buy-button rounded-l border-2 border-black my-4">
                <div className="md:text-sm text-xs text-black font-bold flex justify-between">
                  <div className="pl-4 py-1 w-1/2">₦5000.00</div>
                  <div className="text-white px-4 py-1 w-1/2 ">Buy Now</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsBanner;
