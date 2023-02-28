import { useMutation } from "react-query";
import request from "@/utils/request";
/**
 * Login with credentials
 * @param {Credentials} options
 */
const useAuthLogin = (options) =>
  useMutation(async (data) => request.post("/auth/login", data), {
    ...options,
    onSuccess: (r) => {
      options && options.onSuccess(r);
    },
  });

export default useAuthLogin;
