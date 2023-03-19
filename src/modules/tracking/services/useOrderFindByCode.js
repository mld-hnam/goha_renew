import { useMutation,  } from "react-query";

import request from "@/utils/request";

const useOrderFindByCode = (option) =>
  useMutation(
    ["find-code"],
    (payload) => request.post(`/orders/find-code`, { ...payload }),
    {
      ...option,
    }
  );

export default useOrderFindByCode;
