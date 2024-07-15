import { getProfile } from "@/api/user/getProfile";
import { GET_EVENTS, GET_PROFILE } from "@/constants/queryKey";
import { Profile } from "@/types/profile";
import { useQuery } from "@tanstack/react-query";

const useProfileDetails = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [GET_PROFILE],
    queryFn: async () => (await getProfile()) as Profile,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useProfileDetails;
