import { publicInstanceAxios } from "@utils/axiosInstance";

export const getAllProducts = async ({ queryKey } = { queryKey: 1 }) => {
  const page = String(queryKey?.[1]) || "1";
  const res = await publicInstanceAxios.get(`/products?page=${page}`);
  return res.data;
};
