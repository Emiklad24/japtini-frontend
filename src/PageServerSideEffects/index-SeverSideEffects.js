import { dehydrate, QueryClient } from "react-query";
import { getCategoriesService } from "@services/getCategories.service";
import queryKeys from "@utils/queryKeys";
import { getAllProductsService } from "@services/getAllProducts.service";

export const indexServerSideEffect = async () => {
  const queryClient = new QueryClient();
  const { GET_CATEGORIES_KEY, GET_PRODUCTS_KEY } = queryKeys;
  await queryClient.prefetchQuery(GET_CATEGORIES_KEY, getCategoriesService);
  await queryClient.prefetchQuery(GET_PRODUCTS_KEY, getAllProductsService);
  const dehydratedState = dehydrate(queryClient);

  return Promise.resolve(dehydratedState);
};
