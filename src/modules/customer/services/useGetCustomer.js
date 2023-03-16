import request from "@/utils/request";
import { useQuery } from "react-query";

export default function useGetCustomer(id, option) {
  return useQuery(["customer", id], () => request.get(`customers/${id}`), {
    ...option,
  });
}
