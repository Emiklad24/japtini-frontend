import { useQuery } from "react-query";
import queryKeys from "@utils/queryKeys";
import { getAllProductsService } from "@services/getAllProducts.service";
import { useRouter } from "next/router";

export const useGetProducts = (customPage) => {
  const { query } = useRouter();
  const page = String(customPage || 1) || String(query?.page || 1);
  const { GET_PRODUCTS_KEY } = queryKeys;
  const { data, isLoading, error, isFetching } = useQuery({
    queryFn: getAllProductsService,
    queryKey: [GET_PRODUCTS_KEY, page],
  });

  return {
    data,
    isLoading,
    error,
    isFetching,
  };
};
