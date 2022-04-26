/* eslint-disable @next/next/no-img-element */
import { useSignupValidationSchema } from "@hooks/formValidations/useSignupFormValidationSchema";
import React from "react";

function SignupForm() {
  const { formik } = useSignupValidationSchema();
  return (
    <form autoComplete="on" onSubmit={formik.handleSubmit}>
      <div className="mb-6">
        <label
          className="block mb-2 text-coolGray-800 font-medium"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md  placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          type="email"
          placeholder="johdoe@shuffle.dev"
          name="email"
          id="email"
          onChange={formik?.handleChange}
          value={formik?.values?.email}
          onBlur={formik?.handleBlur}
          //   disabled={isLoading || isSuccess}
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-coolGray-800 font-medium"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          type="password"
          placeholder="************"
          name="password"
          id="password"
          onChange={formik?.handleChange}
          value={formik?.values?.password}
          onBlur={formik?.handleBlur}
        />
      </div>

      <div className="mb-4">
        <label
          className="block mb-2 text-coolGray-800 font-medium"
          htmlFor="passwordConfirmation"
        >
          Confirm Password
        </label>
        <input
          className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          type="password"
          placeholder="************"
          name="passwordConfirmation"
          id="passwordConfirmation"
          onChange={formik?.handleChange}
          value={formik?.values?.passwordConfirmation}
          onBlur={formik?.handleBlur}
        />
      </div>
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="w-full md:w-1/2"></div>
        <div className="w-full md:w-auto mt-1">
          <a
            className="inline-block text-xs font-medium text-green-500 hover:text-green-600"
            href="#"
          >
            Forgot your password?
          </a>
        </div>
      </div>
      <input
        className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
        type="submit"
        value="Sign up"
      />

      <p className="text-center">
        <span className="text-xs font-medium">Don’t have an account?</span>
        <a
          className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
          href="#"
        >
          Sign up
        </a>
      </p>
    </form>
  );
}

export default SignupForm;
