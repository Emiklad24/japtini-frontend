import { publicInstanceAxios } from "@utils/axiosInstance";

/**
 * @desc gets single product.
 * @returns { Array }
 */
export const getSingleProduct = async (context) => {
  const slug = context.queryKey?.[1] || "";
  const res = await publicInstanceAxios.get(`/products/${slug}`);

  return res?.data?.data;
};
