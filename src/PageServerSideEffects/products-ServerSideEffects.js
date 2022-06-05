import { dehydrate, QueryClient } from "react-query";
import queryKeys from "@utils/queryKeys";
import { getAllProductsService } from "@services/getAllProducts.service";

export const productsServerSideEffect = async (page) => {
  const queryClient = new QueryClient();
  const { GET_PRODUCTS_KEY } = queryKeys;

  await queryClient.prefetchQuery(
    [GET_PRODUCTS_KEY, String(page || 1)],
    getAllProductsService
  );
  const dehydratedState = dehydrate(queryClient);

  return Promise.resolve(dehydratedState);
};
