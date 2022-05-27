/* eslint-disable @next/next/no-img-element */
import Layout from "@components/Layout/Layout";
import Link from "next/link";
import React from "react";

const userPayment = () => {
  return (
    <Layout>
      <>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="font-bold text-sm leading-10">
            <span className="text-gray-400">Home</span> / Profile
          </div>
          <div className="font-bold text-3xl">Profile</div>
        </div>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="block md:flex">
            <div className="w-full md:w-1/4">
              <div className="mr-4 h-auto p-5 border-half border-jp-gray-finese rounded-lg text-center">
                <Link passHref href="/" className>
                  <div className="user-profile-image h-auto md:h-2/3 w-full">
                    <img
                      src="../img/jp.jpg"
                      alt=""
                      className="rounded-full h-24 w-24 align-middle border-none mx-auto"
                    />
                  </div>
                </Link>
                <div className="text-black font-bold text-lg pt-4 pb-2">
                  Debra Holt
                </div>
                <div className="text-gray-400 text-xs font-medium pb-4">
                  debra.holt@example.com
                </div>
                <a
                  href="#"
                  className="group block max-w-xs mx-auto rounded-lg bg-white hover:bg-jp-purple-100 hover:ring-jp-purple-100 w-full duration-75 transition-all"
                >
                  <div className="rounded-lg flex justify-start mx-auto w-2/3 gap-4 items-center py-2 mt-4 text-jp-gray-100 group-hover:text-white duration-150 transition-all font-medium text-sm">
                    <svg
                      className="fill-[#A0A19C] text-[#A0A19C] group-hover:text-white group-hover:fill-white duration-150 transition-all"
                      width={14}
                      height={19}
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.6673 18.3333H12.0006V16.6666C12.0006 16.0036 11.7373 15.3677 11.2684 14.8989C10.7996 14.43 10.1637 14.1666 9.50065 14.1666H4.50065C3.83761 14.1666 3.20172 14.43 2.73288 14.8989C2.26404 15.3677 2.00065 16.0036 2.00065 16.6666V18.3333H0.333984V16.6666C0.333984 15.5616 0.772971 14.5018 1.55437 13.7204C2.33577 12.939 3.39558 12.5 4.50065 12.5H9.50065C10.6057 12.5 11.6655 12.939 12.4469 13.7204C13.2283 14.5018 13.6673 15.5616 13.6673 16.6666V18.3333ZM7.00065 10.8333C6.34404 10.8333 5.69386 10.704 5.08723 10.4527C4.48061 10.2014 3.92941 9.83314 3.46512 9.36885C3.00082 8.90455 2.63253 8.35336 2.38125 7.74673C2.12998 7.1401 2.00065 6.48992 2.00065 5.83331C2.00065 5.1767 2.12998 4.52652 2.38125 3.9199C2.63253 3.31327 3.00082 2.76207 3.46512 2.29778C3.92941 1.83349 4.48061 1.46519 5.08723 1.21392C5.69386 0.962642 6.34404 0.833313 7.00065 0.833313C8.32673 0.833313 9.5985 1.3601 10.5362 2.29778C11.4739 3.23546 12.0006 4.50723 12.0006 5.83331C12.0006 7.1594 11.4739 8.43116 10.5362 9.36885C9.5985 10.3065 8.32673 10.8333 7.00065 10.8333V10.8333ZM7.00065 9.16665C7.88471 9.16665 8.73255 8.81546 9.35767 8.19034C9.98279 7.56521 10.334 6.71737 10.334 5.83331C10.334 4.94926 9.98279 4.10141 9.35767 3.47629C8.73255 2.85117 7.88471 2.49998 7.00065 2.49998C6.1166 2.49998 5.26875 2.85117 4.64363 3.47629C4.01851 4.10141 3.66732 4.94926 3.66732 5.83331C3.66732 6.71737 4.01851 7.56521 4.64363 8.19034C5.26875 8.81546 6.1166 9.16665 7.00065 9.16665V9.16665Z" />
                    </svg>
                    Personal Info
                  </div>
                </a>
                <a
                  href="#"
                  className="group block max-w-xs mx-auto rounded-lg bg-white hover:bg-jp-purple-100 hover:ring-jp-purple-100 w-full duration-75 transition-all"
                >
                  <div className="rounded-lg flex justify-start mx-auto w-2/3 gap-4 items-center py-2 mt-4 text-jp-gray-100 group-hover:text-white duration-150 transition-all font-medium text-sm">
                    <svg
                      className="fill-[#A0A19C] text-[#A0A19C] group-hover:text-white group-hover:fill-white duration-150 transition-all"
                      width={16}
                      height={18}
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.6667 17.3334H1.33333C1.11232 17.3334 0.900358 17.2456 0.744078 17.0893C0.587797 16.933 0.5 16.721 0.5 16.5V1.50002C0.5 1.27901 0.587797 1.06704 0.744078 0.910765C0.900358 0.754484 1.11232 0.666687 1.33333 0.666687H14.6667C14.8877 0.666687 15.0996 0.754484 15.2559 0.910765C15.4122 1.06704 15.5 1.27901 15.5 1.50002V16.5C15.5 16.721 15.4122 16.933 15.2559 17.0893C15.0996 17.2456 14.8877 17.3334 14.6667 17.3334ZM13.8333 15.6667V2.33335H2.16667V15.6667H13.8333ZM4.66667 4.83335H11.3333V6.50002H4.66667V4.83335ZM4.66667 8.16669H11.3333V9.83335H4.66667V8.16669ZM4.66667 11.5H8.83333V13.1667H4.66667V11.5Z" />
                    </svg>
                    Orders
                  </div>
                </a>
                <a
                  href="#"
                  className="group block max-w-xs mx-auto rounded-lg bg-white hover:bg-jp-purple-100 hover:ring-jp-purple-100 w-full duration-75 transition-all"
                >
                  <div className="rounded-lg flex justify-start mx-auto w-2/3 gap-4 items-center py-2 mt-4 text-jp-gray-100 group-hover:text-white duration-150 transition-all font-medium text-sm">
                    <svg
                      className="fill-[#A0A19C] text-[#A0A19C] group-hover:text-white group-hover:fill-white duration-150 transition-all"
                      width={18}
                      height={16}
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.49935 0.5H16.4993C16.7204 0.5 16.9323 0.587797 17.0886 0.744078C17.2449 0.900358 17.3327 1.11232 17.3327 1.33333V14.6667C17.3327 14.8877 17.2449 15.0996 17.0886 15.2559C16.9323 15.4122 16.7204 15.5 16.4993 15.5H1.49935C1.27834 15.5 1.06637 15.4122 0.910093 15.2559C0.753813 15.0996 0.666016 14.8877 0.666016 14.6667V1.33333C0.666016 1.11232 0.753813 0.900358 0.910093 0.744078C1.06637 0.587797 1.27834 0.5 1.49935 0.5ZM15.666 8H2.33268V13.8333H15.666V8ZM15.666 4.66667V2.16667H2.33268V4.66667H15.666Z" />
                    </svg>
                    Payment
                  </div>
                </a>
                <a
                  href="#"
                  className="group block max-w-xs mx-auto rounded-lg bg-white hover:bg-jp-purple-100 hover:ring-jp-purple-100 w-full duration-75 transition-all"
                >
                  <div className="rounded-lg flex justify-start mx-auto w-2/3 gap-4 items-center py-2 mt-4 text-jp-gray-100 group-hover:text-white duration-150 transition-all font-medium text-sm">
                    <svg
                      className="fill-[#A0A19C] text-[#A0A19C] group-hover:text-white group-hover:fill-white duration-150 transition-all"
                      width={17}
                      height={18}
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.33398 14H5.00065V15.6667H15.0007V2.33335H5.00065V4.00002H3.33398V1.50002C3.33398 1.27901 3.42178 1.06704 3.57806 0.910765C3.73434 0.754484 3.9463 0.666687 4.16732 0.666687H15.834C16.055 0.666687 16.267 0.754484 16.4232 0.910765C16.5795 1.06704 16.6673 1.27901 16.6673 1.50002V16.5C16.6673 16.721 16.5795 16.933 16.4232 17.0893C16.267 17.2456 16.055 17.3334 15.834 17.3334H4.16732C3.9463 17.3334 3.73434 17.2456 3.57806 17.0893C3.42178 16.933 3.33398 16.721 3.33398 16.5V14ZM5.00065 8.16669H10.834V9.83335H5.00065V12.3334L0.833984 9.00002L5.00065 5.66669V8.16669Z" />
                    </svg>
                    Logout
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <div className="mr-4 h-auto p-5">
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
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default userPayment;
