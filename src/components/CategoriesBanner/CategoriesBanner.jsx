import { useGetCategories } from "@hooks/reusables/useGetCategories.hook";
import React from "react";

const CategoriesBanner = () => {
  const { data } = useGetCategories();
  return (
    <>
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
      <div className="max-w-6xl mx-auto flex gap-4 py-5 px-4 md:px-0">
        <div className="md:block hidden w-1/4 bg-jp-purple-100 rounded-lg py-8 px-14 text-white">
          <ul className="leading-12">
            {data &&
              data.data.length &&
              data.data.map((category) => (
                <li key={category.id}>
                  <a
                    href="#"
                    className="flex justify-between items-center font-medium "
                  >
                    {category.name} Produce{" "}
                    <span>
                      <svg
                        width={8}
                        height={14}
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.17168 6.99974L0.22168 2.04974L1.63568 0.635742L7.99968 6.99974L1.63568 13.3637L0.22168 11.9497L5.17168 6.99974Z"
                          fill="white"
                        />
                      </svg>
                    </span>{" "}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div
          className="md:w-3/4 w-full header-gap rounded-lg text-white font-bold text-3xl text-right"
          style={{ backgroundImage: 'url("/bg.png")' }}
        >
          <div
            className="h-full p-20 rounded-lg flex justify-end items-center"
            style={{
              background:
                "-webkit-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 0%), -webkit-linear-gradient(-45deg, rgba(44, 44, 44, 0) 50%, rgba(44, 44, 44, 1) 0%)",
            }}
          >
            <div className="text-left">
              <div>
                Farm Produce
                <br /> Delivered Anytime
              </div>
              <div className="mt-10">
                <button className="rounded py-2 px-3 text-white bg-jp-purple-100 uppercase text-lg font-bold">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesBanner;
