import Link from "next/link";
import React from "react";

const userProfile = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="max-w-6xl mx-auto hidden md:flex gap-8 items-center p-4">
            <div id="logo">
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
              {/* <img class="md:hidden block" src="../img/Image.png" alt=""> */}
            </div>
            <div className="md:flex justify-between w-full hidden">
              <form action className="flex w-1/2">
                <div className="rounded border border-jp-gray-200 p-1 px-4">
                  <select name id className="bg-white py-3 px-5 font-medium ">
                    <option value="all">All</option>
                  </select>
                </div>
                <div className="rounded border border-jp-gray-200 p-1 w-full">
                  <input
                    type="search"
                    name
                    id
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
                <button className="p-4 rounded border border-jp-gray-200">
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
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex md:hidden justify-between items-center p-4">
            <div id="logo">
              <img className="md:hidden block" src="../img/Image.png" alt="" />
            </div>
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
                <button className>
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
        <div className="max-w-6xl mt-8 mx-auto hidden md:flex gap-8 items-center border border-jp-gray-200">
          <button className="flex items-center p-4 pr-20 border-r border-jp-gray-200 ">
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
            Categories
          </button>
        </div>
      </header>
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
              <form action>
                <div className="w-full lg:w-3/4">
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
                <div className="w-full lg:w-3/4 mt-8">
                  <label htmlFor="last_name" className="font-medium leading-10">
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
                <div className="w-full lg:w-3/4 mt-8">
                  <label htmlFor="email" className="font-medium leading-10">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="last_name"
                    className="border border-gray-300 rounded p-3 w-full"
                    placeholder="Email Address"
                  />
                </div>
                <div className="w-full lg:w-3/4 mt-8">
                  <label htmlFor="phone" className="font-medium leading-10">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="border border-gray-300 rounded p-3 w-full"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="w-full lg:w-3/4 mt-8">
                  <label htmlFor="password" className="font-medium leading-10">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="border border-gray-300 rounded p-3 w-full hidden"
                    placeholder="Password"
                  />
                  <div />
                  <button className="border border-gray-300 rounded p-3 w-full md:w-1/2">
                    Change Password
                  </button>
                </div>
              </form>
              <div className="w-full flex justify-end lg:w-3/4 my-20">
                <button className="border border-gray-300 text-white bg-jp-purple-100 rounded p-3 w-full md:w-1/2">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className=" p-4 bg-jp-gray-200 sm:p-6 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8 py-8 px-6 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-jp-black-100 capitalize">
                Company
              </h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a
                    href="#"
                    className=" hover:underline capitalize text-jp-gray-300"
                  >
                    Available Services
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline capitalize text-jp-gray-300"
                  >
                    What we do
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline capitalize text-jp-gray-300"
                  >
                    Latest Post
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-jp-gray-300">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-jp-black-100 capitalize">
                Profile
              </h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a
                    href="#"
                    className=" hover:underline capitalize text-jp-gray-300"
                  >
                    Checkout
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline capitalize text-jp-gray-300"
                  >
                    Order Tracking
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline capitalize text-jp-gray-300"
                  >
                    Help &amp; Support
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline text-jp-gray-300 capitalize"
                  >
                    My Account
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-jp-black-100 capitalize">
                Help and Information
              </h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a
                    href="#"
                    className=" hover:underline capitalize text-jp-gray-300"
                  >
                    Help &amp; FAQs
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline capitalize text-jp-gray-300"
                  >
                    Track Order
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline capitalize text-jp-gray-300"
                  >
                    Shipping &amp; Delivery
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline text-jp-gray-300 capitalize"
                  >
                    Administrator
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-jp-black-100 capitalize">
                Newsletter
              </h2>
              <ul className="text-jp-black-200 text-sm">
                <p className="mb-4">
                  Join our mailing list and get 5% off your first order.
                </p>
                <span className="mb-4">
                  <form action className="flex gap-3">
                    <input
                      type="email"
                      name="email-newsletter-footer"
                      id="email-newsletter-footer"
                      placeholder="E-mail address"
                      className="rounded-lg p-3 border w-3/4 border-jp-gray-300 focus:border-gray-400 transition-all duration-75 "
                    />
                    <button className="text-white rounded-lg py-4 px-5 bg-jp-purple-100 hover:bg-purple-800 duration-100 transition-all  text-xs ">
                      Subscribe
                    </button>
                  </form>
                </span>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-jp-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <span className="text-jp-gray-100 text-sm capitalize">
                Follow our Socials
              </span>
              <a
                href="#"
                className="text-jp-gray-100 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-jp-gray-100 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-jp-gray-100 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © Copyright 2022{" "}
              <a href="https://ceeless.com" className="hover:underline">
                Japtini™
              </a>{" "}
              All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default userProfile;
