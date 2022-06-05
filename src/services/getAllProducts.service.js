import { publicInstanceAxios } from "@utils/axiosInstance";

export const getAllProductsService = async ({ queryKey }) => {
  const page = String(queryKey?.[1]) || "1";
  const res = await publicInstanceAxios.get(`/products?page=${page}`);
  return res.data;
};
