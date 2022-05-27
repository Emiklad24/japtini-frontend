import { useQuery } from "react-query";
import queryKeys from "@utils/queryKeys";
import { getCategoriesService } from "@services/getCategories.service";

export const useGetCategories = () => {
  const { GET_CATEGORIES_KEY } = queryKeys;
  const { data, isLoading, error, isFetching } = useQuery({
    queryFn: getCategoriesService,
    queryKey: [GET_CATEGORIES_KEY],
  });

  return {
    data,
    isLoading,
    error,
    isFetching,
  };
};
