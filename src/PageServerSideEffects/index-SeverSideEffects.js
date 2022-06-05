import { dehydrate, QueryClient } from "react-query";
import { getCategoriesService } from "@services/getCategories.service";
import queryKeys from "@utils/queryKeys";
import { getAllProducts } from "@services/getAllProducts.service";

export const indexServerSideEffect = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",
        refetchOnReconnect: "always",
        cacheTime: 3.6e6,
        refetchInterval: 3.6e6, //1 hour
        refetchIntervalInBackground: false,
        suspense: false,
        staleTime: 3.6e6,
      },
    },
  });
  const { GET_CATEGORIES_KEY, GET_PRODUCTS_KEY } = queryKeys;
  await queryClient.prefetchQuery(GET_CATEGORIES_KEY, getCategoriesService);
  await queryClient.prefetchQuery([GET_PRODUCTS_KEY, "1"], getAllProducts);
  const dehydratedState = dehydrate(queryClient);

  return Promise.resolve(dehydratedState);
};
