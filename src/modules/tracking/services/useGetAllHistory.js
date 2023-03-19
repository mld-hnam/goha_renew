import { useQuery, useQueryClient } from "react-query";

import request from "@/utils/request";

const useGetAllHistory = (params, option) =>
  useQuery(
    ["all-history", params],
    () => request.get(`shipmentHistory/get-all`, { params }),
    {
      ...option,
    }
  );

export function useInvalidateOrder() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries(["all-history"]);
}

export default useGetAllHistory;