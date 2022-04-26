import { useFormik } from "formik";
import * as yup from "yup";

export const useSignupValidationSchema = (onSubmit) => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Wrong email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Enter a minimum of 8 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password must contain at least one letter and one number"
      ),
    passwordConfirmation: yup
      .string()
      .required("Confirm your password")
      .oneOf(
        [yup.ref("password"), null],
        "Password confirmation must match with password"
      ),
  });

  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return { formik };
};
