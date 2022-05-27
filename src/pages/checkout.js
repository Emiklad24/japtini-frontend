import Layout from "@components/Layout/Layout";
import React from "react";

const checkout = () => {
  return (
    <Layout>
      <>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="font-bold text-3xl">Checkout</div>
        </div>
        <div className="max-w-6xl mx-auto mb-10 py-5 px-4 md:px-0">
          <div className="block md:flex my-4 gap-3">
            {/* you can unhide this while building the stepper form or just create a new page  PERSONAL DETAILS*/}
            <div className="w-full px-3 md:w-3/4 bg-white hidden">
              <div className="flex border-b border-gray-200 pb-5 mb-5">
                <h3 className="font-semibold text-black capitalize w-1/4 flex items-center gap-4">
                  Personal Details{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 text-center flex items-center gap-4">
                  Shipping Details{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 text-center flex items-center gap-4">
                  Shipping Method{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 text-center flex items-center gap-4">
                  Payment Method{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
              </div>
              <form action>
                <div className="flex gap-10">
                  <div className="w-1/2">
                    <label
                      htmlFor="first_name"
                      className="font-medium leading-10"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="border border-gray-300 rounded p-3 w-full"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="last_name"
                      className="font-medium leading-10"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="border border-gray-300 rounded p-3 w-full"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="flex gap-10 mt-10">
                  <div className="w-1/2">
                    <label htmlFor="email" className="font-medium leading-10">
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="border border-gray-300 rounded p-3 w-full"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="phone" className="font-medium leading-10">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="border border-gray-300 rounded p-3 w-full"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="text-xs font-bold py-3 my-1">
                  <label htmlFor>
                    <input type="checkbox" name="accept" id className="mr-2" />I
                    agree to the Privacy and Terms of Conditions
                  </label>
                </div>
              </form>
              <div className="flex justify-between items-center">
                {/* flex font-semibold text-jp-purple-100 text-sm mt-10 rounded border border-jp-purple-100 px-2 py-3 items-center w-1/2 */}
                <a
                  href="#"
                  className="flex items-center text-jp-purple-100 capitalize rounded border border-jp-purple-100 px-3 py-2"
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
                {/* bg-jp-purple-100 font-semibold hover:bg-indigo-600 py-1 px-3 text-sm text-white uppercase w-1/2 flex
              items-center */}
                <button className="flex items-center text-white rounded bg-jp-purple-100 capitalize px-3 py-2">
                  Save and Continue
                </button>
              </div>
            </div>
            {/* you can unhide this while building the stepper form or just create a new page  SHIPPING DETAILS*/}
            <div className="w-full px-3 md:w-3/4 bg-white hidden">
              <div className="flex border-b border-gray-200 pb-5 mb-5">
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 flex items-center gap-4">
                  Personal Details{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-black capitalize w-1/4 text-center flex items-center gap-4">
                  Shipping Details{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 text-center flex items-center gap-4">
                  Shipping Method{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 text-center flex items-center gap-4">
                  Payment Method{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
              </div>
              <form action>
                <div className="flex gap-10">
                  <div className="w-1/2">
                    <label htmlFor="street" className="font-medium leading-10">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="street"
                      id="street"
                      className="border border-gray-300 rounded p-3 w-full"
                      placeholder="Street Address"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="zip_code"
                      className="font-medium leading-10"
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zip_code"
                      id="zip_code"
                      className="border border-gray-300 rounded p-3 w-full"
                      placeholder="ZIP Code"
                    />
                  </div>
                </div>
                <div className="flex gap-10 mt-10">
                  <div className="w-1/2">
                    <label htmlFor="city" className="font-medium leading-10">
                      City{" "}
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="border border-gray-300 rounded p-3 w-full"
                      placeholder="City"
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="country" className="font-medium leading-10">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      className="border border-gray-300 rounded p-3 w-full"
                      placeholder="Country"
                    />
                  </div>
                </div>
              </form>
              <div className="flex justify-between items-center mt-10">
                {/* flex font-semibold text-jp-purple-100 text-sm mt-10 rounded border border-jp-purple-100 px-2 py-3 items-center w-1/2 */}
                <a
                  href="#"
                  className="flex items-center text-sm text-jp-purple-100 capitalize rounded border border-jp-purple-100 px-3 py-2"
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
                  Back to Personal Details
                </a>
                {/* bg-jp-purple-100 font-semibold hover:bg-indigo-600 py-1 px-3 text-sm text-white uppercase w-1/2 flex
              items-center */}
                <button className="flex items-center text-sm text-white rounded bg-jp-purple-100 capitalize px-3 py-2">
                  Save and Continue
                </button>
              </div>
            </div>
            {/* you can unhide this while building the stepper form or just create a new page SHIPPING METHOD */}
            <div className="w-full px-3 md:w-3/4 bg-white hidden">
              <div className="flex border-b border-gray-200 pb-5 mb-5">
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 flex items-center gap-4">
                  Personal Details{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 text-center flex items-center gap-4">
                  Shipping Details{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-black capitalize w-1/4 text-center flex items-center gap-4">
                  Shipping Method
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 text-center flex items-center gap-4">
                  Payment Method{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
              </div>
              <form action>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="border border-jp-gray-200 py-3 px-4">
                    <label
                      htmlFor="street"
                      className="font-medium leading-10 flex items-center gap-3"
                    >
                      {" "}
                      <input type="radio" name="shipping" id="shipping" />
                      <div className="flex justify-between w-full">
                        <div>
                          <div>Free</div>
                          <div className="text-sm text-gray-400 -mt-2">
                            5 - 7 Working Days
                          </div>
                        </div>
                        <div>₦25,000</div>
                      </div>
                    </label>
                  </div>
                  <div className="border border-jp-gray-200 py-3 px-4">
                    <label
                      htmlFor="street"
                      className="font-medium leading-10 flex items-center gap-3"
                    >
                      {" "}
                      <input type="radio" name="shipping" id="shipping" />
                      <div className="flex justify-between w-full">
                        <div>
                          <div>Free</div>
                          <div className="text-sm text-gray-400 -mt-2">
                            5 - 7 Working Days
                          </div>
                        </div>
                        <div>₦25,000</div>
                      </div>
                    </label>
                  </div>
                </div>
              </form>
              <div className="flex justify-between items-center mt-10">
                {/* flex font-semibold text-jp-purple-100 text-sm mt-10 rounded border border-jp-purple-100 px-2 py-3 items-center w-1/2 */}
                <a
                  href="#"
                  className="flex items-center text-sm text-jp-purple-100 capitalize rounded border border-jp-purple-100 px-3 py-2"
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
                  Back to Shipping Details
                </a>
                {/* bg-jp-purple-100 font-semibold hover:bg-indigo-600 py-1 px-3 text-sm text-white uppercase w-1/2 flex
              items-center */}
                <button className="flex items-center text-sm text-white rounded bg-jp-purple-100 capitalize px-3 py-2">
                  Save and Continue
                </button>
              </div>
            </div>
            {/* you can unhide this while building the stepper form or just create a new page  */}
            <div className="w-full px-3 md:w-3/4 bg-white">
              <div className="flex border-b border-gray-200 pb-5 mb-5">
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 flex items-center gap-4">
                  Personal Details{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 text-center flex items-center gap-4">
                  Shipping Details{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-gray-400 capitalize w-1/4 text-center flex items-center gap-4">
                  Shipping Method
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                      fillOpacity="0.5"
                    />
                  </svg>
                </h3>
                <h3 className="font-semibold text-black capitalize w-1/4 text-center flex items-center gap-4">
                  Payment Method{" "}
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.172 7.00001L0.222 2.05001L1.636 0.636013L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#111111"
                    />
                  </svg>
                </h3>
              </div>
              <form action>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="border border-jp-gray-200 p-4">
                    <label
                      htmlFor="street"
                      className="font-medium leading-10 flex items-center gap-3"
                    >
                      {" "}
                      <input type="radio" name="shipping" id="shipping" />
                      <div className="flex justify-between w-full">
                        <div>
                          <div>Paypal</div>
                          <div className="text-sm text-gray-400 -mt-2">
                            n*****o@g***l.com
                          </div>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-3"
                            width={18}
                            height={21}
                            viewBox="0 0 18 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.0671 6.478C17.5591 7.358 17.6231 8.492 17.3671 9.805C16.6271 13.611 14.0911 14.925 10.8531 14.925H10.3531C10.1615 14.9253 9.97626 14.9939 9.83072 15.1186C9.68517 15.2432 9.58887 15.4157 9.55911 15.605L9.51911 15.825L8.88911 19.818L8.85711 19.988C8.82734 20.1772 8.73099 20.3496 8.58543 20.474C8.43987 20.5985 8.25464 20.6669 8.06311 20.667H4.72011C4.65035 20.667 4.58143 20.6518 4.51807 20.6226C4.45472 20.5934 4.39844 20.5509 4.35312 20.4978C4.30779 20.4448 4.27448 20.3826 4.25549 20.3155C4.2365 20.2484 4.23228 20.1779 4.24311 20.109L4.41811 19H5.93611L6.88611 12.98H8.27111C12.9491 12.98 16.0211 10.777 17.0671 6.478ZM14.1071 1.388C14.8691 2.256 15.0901 3.198 14.8591 4.673C14.8401 4.796 14.8191 4.913 14.7971 5.033C14.0621 8.806 11.7081 10.479 7.84111 10.479H5.95711C5.32711 10.479 4.78311 10.893 4.60311 11.481L4.58911 11.479L3.65911 17.373H0.121113C0.11367 17.373 0.106324 17.3713 0.0995902 17.3681C0.0928564 17.365 0.086898 17.3604 0.0821332 17.3547C0.0773685 17.3489 0.0739128 17.3422 0.072009 17.335C0.0701052 17.3279 0.0697996 17.3203 0.071113 17.313L2.66911 0.803C2.70414 0.579344 2.81789 0.375548 2.98986 0.228326C3.16184 0.0811038 3.38073 0.000132961 3.60711 0H9.58311C11.7661 0 13.2991 0.469 14.1061 1.388H14.1071Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="border border-jp-gray-200 p-4">
                    <label
                      htmlFor="street"
                      className="font-medium leading-10 flex items-center gap-3"
                    >
                      {" "}
                      <input type="radio" name="shipping" id="shipping" />
                      <div className="flex justify-between w-full">
                        <div>
                          <div>Visa</div>
                          <div className="text-sm text-gray-400 -mt-2">
                            *********** 7717
                          </div>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-3"
                            width={24}
                            height={8}
                            viewBox="0 0 24 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.222 7.76812L21.997 6.64312H19.483L19.083 7.76012L17.068 7.76412C18.0273 5.45726 18.9886 3.15126 19.952 0.846117C20.116 0.455117 20.407 0.256118 20.836 0.258118C21.164 0.261118 21.699 0.261117 22.442 0.259117L24 7.76512L22.222 7.76812ZM20.049 5.10212H21.669L21.064 2.28212L20.049 5.10212ZM7.06 0.257117L9.086 0.259117L5.954 7.76912L3.903 7.76712C3.38725 5.78344 2.87791 3.79809 2.375 1.81112C2.275 1.41512 2.077 1.13812 1.696 1.00712C1.357 0.890117 0.792 0.710117 0 0.465117V0.260118H3.237C3.797 0.260118 4.124 0.531117 4.229 1.08712C4.335 1.64412 4.601 3.06212 5.029 5.34112L7.06 0.257117ZM11.87 0.259117L10.268 7.76712L8.34 7.76512L9.94 0.257117L11.87 0.259117ZM15.78 0.120117C16.357 0.120117 17.084 0.300117 17.502 0.465117L17.164 2.02212C16.786 1.87012 16.164 1.66512 15.641 1.67212C14.881 1.68512 14.411 2.00412 14.411 2.31012C14.411 2.80812 15.227 3.05912 16.067 3.60312C17.026 4.22312 17.152 4.78012 17.14 5.38512C17.127 6.64112 16.067 7.88012 13.831 7.88012C12.811 7.86512 12.443 7.77912 11.611 7.48412L11.963 5.85912C12.81 6.21412 13.169 6.32712 13.893 6.32712C14.556 6.32712 15.125 6.05912 15.13 5.59212C15.134 5.26012 14.93 5.09512 14.186 4.68512C13.442 4.27412 12.398 3.70512 12.412 2.56312C12.429 1.10112 13.814 0.120117 15.781 0.120117H15.78Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>
                  <button className="border border-jp-gray-200 p-4">
                    <div className="font-bold">+</div>
                    <div className="font-medium mt-4">Add New Card</div>
                  </button>
                  <button className="border border-jp-gray-200 p-4">
                    <div className="font-bold flex justify-center">
                      <svg
                        width={20}
                        height={18}
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H16V4ZM2 6V16H18V6H2ZM2 2V4H14V2H2ZM13 10H16V12H13V10Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div className="font-medium mt-4">Pay Via Wallet</div>
                  </button>
                </div>
              </form>
              <div className="flex justify-between items-center mt-10">
                {/* flex font-semibold text-jp-purple-100 text-sm mt-10 rounded border border-jp-purple-100 px-2 py-3 items-center w-1/2 */}
                <a
                  href="#"
                  className="flex items-center text-sm text-jp-purple-100 capitalize rounded border border-jp-purple-100 px-3 py-2"
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
                  Back to Shipping Details
                </a>
                {/* bg-jp-purple-100 font-semibold hover:bg-indigo-600 py-1 px-3 text-sm text-white uppercase w-1/2 flex
              items-center */}
                <button className="flex items-center text-sm text-white rounded bg-jp-purple-100 capitalize px-3 py-2">
                  Save and Continue
                </button>
              </div>
            </div>
            <div id="summary" className="w-full md:w-1/4 px-8 py-10 shadow-lg">
              <h1 className="font-semibold text-2xl border-b pb-4">Summary</h1>
              <div className="flex justify-between mt-3 mb-3">
                <span className=" text-sm capitalize">Sub-Total</span>
                <span className="font-semibold text-sm">₦5,000.00</span>
              </div>
              <div className="flex justify-between mt-3 mb-3">
                <span className=" text-sm capitalize">Shipping Cost</span>
                <span className="font-semibold text-sm">₦250.00</span>
              </div>
              <div className="flex justify-between mt-3 mb-3">
                <span className=" text-sm capitalize">Discount (10%)</span>
                <span className="font-semibold text-sm">-₦500.00</span>
              </div>
              <div className="flex justify-between mt-3 mb-3">
                <span className=" text-sm capitalize">Tax</span>
                <span className="font-semibold text-sm">10%</span>
              </div>
              <div className="flex justify-between border-y border-jp-gray-100 py-3 mt-3 mb-3 items-center">
                <span className=" text-xs capitalize text-jp-gray-100">
                  Apply Discount Code
                </span>
                <span className="font-semibold text-sm">
                  <svg
                    width={6}
                    height={10}
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.17275 4.99984L0.34375 2.17184L1.75775 0.756836L6.00075 4.99984L1.75775 9.24284L0.34375 7.82784L3.17275 4.99984Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex justify-between mt-3 mb-3">
                <span className=" text-sm capitalize">Total</span>
                <span className="font-semibold text-sm">₦25,000.00</span>
              </div>
              {/* should be unhidden when you want to add a promo code */}
              <div className="py-10 hidden">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              {/* the same as this  */}
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase hidden">
                Apply
              </button>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default checkout;
