import { publicInstanceAxios } from "@utils/axiosInstance";

export const getCategoriesService = async () => {
  const res = await publicInstanceAxios.get("/categories");
  return res.data;
};
