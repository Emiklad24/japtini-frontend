import Review from "@components/Reviews/Reviews";
import React from "react";
import PropTypes from "prop-types";

const Ratings = ({ data }) => {
  return (
    <div
      className="tab-pane fade"
      id="tabs-messages"
      role="tabpanel"
      aria-labelledby="tabs-profile-tab"
    >
      <div className="font-medium text-lg text-black my-3">
        Ratings &amp; Reviews
      </div>
      <div className="flex justify-between w-3/4 md:w-1/4">
        <div>
          <div className="font-bold text-2xl">{data.rating || 0}</div>
          <div>
            <div className="flex my-1">
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
                  fill="#FFA500"
                />
              </svg>
            </div>
          </div>
          <div className="text-gray-400">
            {data?.reviews?.length || 0} reviews
          </div>
          <div className="my-2">
            <button className="rounded-lg py-3 px-4 text-sm text-white bg-jp-purple-100 ">
              Write Review
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <div className="flex">
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
                  fill="#FFA500"
                />
              </svg>
            </div>
            <div className="text-gray-300">5</div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex">
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
            <div className="text-gray-300">4</div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex">
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
            <div className="text-gray-300">3</div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex">
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
            <div className="text-gray-300">2</div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex">
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
            <div className="text-gray-300">1</div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <form action>
          <input
            type="review"
            placeholder="Review.."
            className="border border-gray-200 p-4 rounded w-full "
          />
        </form>
      </div>
      <div className="border-t border-gray-200 py-4">
        <div className="flex justify-end items-center gap-3">
          <select
            name
            id
            className="rounded border border-jp-purple-100 py-2 px-4 bg-white text-jp-purple-100 text-sm"
          >
            <option value>Sort By Latest</option>
          </select>
          <button className="text-jp-purple-100 text-xs capitalize flex gap-2 items-center border border-jp-purple-100">
            see all{" "}
            <svg
              className="w-2"
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.17266 7.00023L0.222656 2.05023L1.63666 0.63623L8.00066 7.00023L1.63666 13.3642L0.222656 11.9502L5.17266 7.00023Z"
                fill="#5463FF"
              />
            </svg>
          </button>
        </div>

        {data && Array.isArray(data.reviews) && data.reviews.length !== 0 ? (
          data?.reviews?.map((review) => (
            <Review review={review} key={review.review} />
          ))
        ) : (
          <p className="text-gray-400 text-center">Product not yet reviewed</p>
        )}
      </div>
    </div>
  );
};

export default Ratings;

Ratings.propTypes = {
  data: PropTypes.object,
};
