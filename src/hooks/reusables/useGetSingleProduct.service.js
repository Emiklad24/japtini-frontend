import { useQuery } from "react-query";
import queryKeys from "@utils/queryKeys";
import { getSingleProduct } from "@services/getSingleProduct.service";
import { useRouter } from "next/router";

export const useGetSingleProduct = () => {
  const router = useRouter();
  const { productSlug } = router.query;
  const { GET_SINGLE_PRODUCT_KEY } = queryKeys;
  const { data, isLoading, error, isFetching } = useQuery({
    queryFn: getSingleProduct,
    queryKey: [GET_SINGLE_PRODUCT_KEY, productSlug],
  });

  return {
    data,
    isLoading,
    error,
    isFetching,
  };
};
