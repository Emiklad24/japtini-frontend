import { publicInstanceAxios } from "@utils/axiosInstance";

export const getAllProductsService = async () => {
  const res = await publicInstanceAxios.get("/products");
  return res.data;
};
