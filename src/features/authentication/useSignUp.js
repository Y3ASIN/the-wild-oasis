import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { singUp as signUpApi } from "../../services/apiAuth";

export function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account form the user's email address"
      );
    },
  });
  return { signUp, isLoading };
}
