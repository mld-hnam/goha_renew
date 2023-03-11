import request from "@/utils/request";
import { useMutation } from "react-query";

const useDeleteCustomer = (config) => {
  return useMutation(
    (payload) => request.delete(`/customers/${payload.id}`, { ...payload }),
    {
      ...config,
    }
  );
};

export default useDeleteCustomer;
