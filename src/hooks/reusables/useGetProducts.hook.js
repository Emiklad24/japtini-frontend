import { useQuery } from "react-query";
import queryKeys from "@utils/queryKeys";
import { getAllProductsService } from "@services/getAllProducts.service";

export const useGetProducts = () => {
  const { GET_PRODUCTS_KEY } = queryKeys;
  const { data, isLoading, error, isFetching } = useQuery({
    queryFn: getAllProductsService,
    queryKey: [GET_PRODUCTS_KEY],
  });

  return {
    data,
    isLoading,
    error,
    isFetching,
  };
};
