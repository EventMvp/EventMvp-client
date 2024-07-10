import { getProfile } from "@/api/getProfile";
import { GET_EVENTS, GET_PROFILE } from "@/constants/queryKey";
import { useQuery } from "@tanstack/react-query";

const useProfileDetails = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [GET_PROFILE],
    queryFn: async () => await getProfile(),
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useProfileDetails;
