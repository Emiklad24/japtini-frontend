import { dehydrate, QueryClient } from "react-query";
import queryKeys from "@utils/queryKeys";
import { getAllProducts } from "@services/getAllProducts.service";

export const productsServerSideEffect = async (page) => {
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
  const { GET_PRODUCTS_KEY } = queryKeys;

  await queryClient.prefetchQuery(
    [GET_PRODUCTS_KEY, String(page || 1)],
    getAllProducts
  );
  const dehydratedState = dehydrate(queryClient);

  return Promise.resolve(dehydratedState);
};
