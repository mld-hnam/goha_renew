import request from "@/utils/request";
import { useMutation } from "react-query";

const useUpdateCustomer = (config) => {
  return useMutation(
    (payload) => request.put(`/customers/${payload.id}`, { ...payload }),
    {
      ...config,
    }
  );
};

export default useUpdateCustomer;
