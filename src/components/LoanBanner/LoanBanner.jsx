import React from "react";
import farmerPix from "@assets/images/products/farmer.png";
import Image from "next/image";

const LoanBanner = () => {
  return (
    <div className="w-full bg-jp-gray-plus py-5 px-10 md:px-0">
      <div className="bg-transparent pt-10 max-w-6xl mx-auto md:flex block text-white">
        <div>
          <div className="capitalise font-bold text-3xl leading-heading pb-10">
            Get Loans as a Vendor
          </div>
          <div className="py-5">
            <p>
              As a vendor, you can get access to business loans to fund your
              business. We know being an entrepreneur isn’t an easy task hence
              the loan system. Why not register as a vendor now?
            </p>
          </div>
          <div className="my-10">
            <button className="rounded py-4 px-3 bg-jp-purple-100">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <Image src={farmerPix} className=" w-full" alt="farmer" />
        </div>
      </div>
    </div>
  );
};

export default LoanBanner;
