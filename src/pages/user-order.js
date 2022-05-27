/* eslint-disable @next/next/no-img-element */
import Layout from "@components/Layout/Layout";
import Link from "next/link";
import React from "react";

const userOrder = () => {
  return (
    <Layout>
      <>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="font-bold text-sm leading-10">
            <span className="text-gray-400">Home</span> / Orders
          </div>
          <div className="font-bold text-3xl">Orders</div>
        </div>
        <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
          <div className="block md:flex">
            <div className="w-full md:w-1/4">
              <div className="mr-4 h-auto p-5 border-half border-jp-gray-finese rounded-lg text-center">
                <Link href="/" className passHref>
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
              <div className="mr-4 h-auto px-5">
                <ul
                  className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b border-jp-gray-200 pl-0 mb-4 "
                  id="tabs-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      href="#tabs-description"
                      className="block text-sm leading-tight hover:border-jp-purple-100
font-medium
capitalize
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
    "
                      id="tabs-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-home"
                      role="tab"
                      aria-controls="tabs-home"
                      aria-selected="true"
                    >
                      All Orders
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#tabs-description"
                      className="block text-sm leading-tight hover:border-jp-purple-100 text-jp-gray-100
font-medium
capitalize
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
    "
                      id="tabs-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-home"
                      role="tab"
                      aria-controls="tabs-home"
                      aria-selected="true"
                    >
                      Delivered
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#tabs-description"
                      className="block text-sm leading-tight hover:border-jp-purple-100 text-jp-gray-100
font-medium
capitalize
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
    "
                      id="tabs-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-home"
                      role="tab"
                      aria-controls="tabs-home"
                      aria-selected="true"
                    >
                      To Process
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#tabs-description"
                      className="block text-sm leading-tight hover:border-jp-purple-100 text-jp-gray-100
font-medium
capitalize
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
    "
                      id="tabs-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-home"
                      role="tab"
                      aria-controls="tabs-home"
                      aria-selected="true"
                    >
                      Cancelled
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#tabs-description"
                      className="block text-sm leading-tight hover:border-jp-purple-100 text-jp-gray-100
font-medium
capitalize
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
    "
                      id="tabs-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-home"
                      role="tab"
                      aria-controls="tabs-home"
                      aria-selected="true"
                    >
                      Archived
                    </a>
                  </li>
                </ul>
                <div className="flex justify-between">
                  <input
                    type="search"
                    name
                    id
                    placeholder="Search..."
                    className="placeholder:text-black p-2 w-1/2 border border-jp-gray-200 placeholder-jp-gray-200 rounded"
                  />
                  <button className="flex gap-3">
                    <svg
                      className="w-4"
                      width={21}
                      height={22}
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.85805 1.87697L14.428 0.081971C14.499 0.0717944 14.5713 0.0769867 14.64 0.0971962C14.7088 0.117406 14.7724 0.15216 14.8266 0.199103C14.8807 0.246047 14.9241 0.304083 14.9539 0.369278C14.9837 0.434474 14.9991 0.505305 14.999 0.576971V21.423C14.999 21.4945 14.9837 21.5653 14.954 21.6304C14.9243 21.6955 14.8809 21.7535 14.8269 21.8004C14.7729 21.8473 14.7094 21.8821 14.6407 21.9024C14.5721 21.9227 14.4999 21.928 14.429 21.918L1.85705 20.123C1.61867 20.089 1.40054 19.9702 1.24274 19.7883C1.08493 19.6065 0.998049 19.3738 0.998047 19.133V2.86697C0.998049 2.62618 1.08493 2.39348 1.24274 2.21161C1.40054 2.02975 1.61867 1.91092 1.85705 1.87697H1.85805ZM2.99905 3.73497V18.265L12.999 19.694V2.30597L2.99905 3.73497ZM15.999 18H18.999V3.99997H15.999V1.99997H19.999C20.2643 1.99997 20.5186 2.10533 20.7062 2.29286C20.8937 2.4804 20.999 2.73475 20.999 2.99997V19C20.999 19.2652 20.8937 19.5195 20.7062 19.7071C20.5186 19.8946 20.2643 20 19.999 20H15.999V18ZM9.19905 11L11.999 15H9.59905L7.99905 12.714L6.39905 15H3.99905L6.79905 11L3.99905 6.99997H6.39905L7.99905 9.28597L9.59905 6.99997H11.999L9.19905 11Z"
                        fill="#111111"
                      />
                    </svg>
                    Export
                  </button>
                </div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full">
                          <thead className="bg-white border-b">
                            <tr>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                #
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                Order ID
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                Items
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                Delivery Date
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                Pricing
                              </th>
                              <th
                                scope="col"
                                className="text-xs font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                Delivery Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className=" border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <input type="checkbox" name id />
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                #55503
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                10kg of Mama Gold Rice
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                10 Feb 2021
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                ₦20,200
                              </td>
                              <td className="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                                Delivered
                              </td>
                              <td className="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                                <button>
                                  <svg
                                    width={4}
                                    height={18}
                                    viewBox="0 0 4 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM2 14C0.9 14 0 14.9 0 16C0 17.1 0.9 18 2 18C3.1 18 4 17.1 4 16C4 14.9 3.1 14 2 14ZM2 7C0.9 7 0 7.9 0 9C0 10.1 0.9 11 2 11C3.1 11 4 10.1 4 9C4 7.9 3.1 7 2 7Z"
                                      fill="#111111"
                                    />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                            <tr className=" border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <input type="checkbox" name id />
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                #55503
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                10kg of Mama Gold Rice
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                10 Feb 2021
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                ₦20,200
                              </td>
                              <td className="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                                Delivered
                              </td>
                              <td className="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                                <button>
                                  <svg
                                    width={4}
                                    height={18}
                                    viewBox="0 0 4 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM2 14C0.9 14 0 14.9 0 16C0 17.1 0.9 18 2 18C3.1 18 4 17.1 4 16C4 14.9 3.1 14 2 14ZM2 7C0.9 7 0 7.9 0 9C0 10.1 0.9 11 2 11C3.1 11 4 10.1 4 9C4 7.9 3.1 7 2 7Z"
                                      fill="#111111"
                                    />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                            <tr className=" border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <input type="checkbox" name id />
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                #55503
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                10kg of Mama Gold Rice
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                10 Feb 2021
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                ₦20,200
                              </td>
                              <td className="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                                Delivered
                              </td>
                              <td className="text-sm text-green-500 font-light px-6 py-4 whitespace-nowrap">
                                <button>
                                  <svg
                                    width={4}
                                    height={18}
                                    viewBox="0 0 4 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM2 14C0.9 14 0 14.9 0 16C0 17.1 0.9 18 2 18C3.1 18 4 17.1 4 16C4 14.9 3.1 14 2 14ZM2 7C0.9 7 0 7.9 0 9C0 10.1 0.9 11 2 11C3.1 11 4 10.1 4 9C4 7.9 3.1 7 2 7Z"
                                      fill="#111111"
                                    />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default userOrder;
