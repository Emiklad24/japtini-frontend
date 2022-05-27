import { dehydrate, QueryClient } from "react-query";
import queryKeys from "@utils/queryKeys";
import { getAllProductsService } from "@services/getAllProducts.service";

export const productsServerSideEffect = async () => {
  const queryClient = new QueryClient();
  const { GET_PRODUCTS_KEY } = queryKeys;

  await queryClient.prefetchQuery(GET_PRODUCTS_KEY, getAllProductsService);
  const dehydratedState = dehydrate(queryClient);

  return Promise.resolve(dehydratedState);
};
