/* eslint-disable react/display-name */
import { useMutation } from "react-query";
import { signupUserKey } from "@/utils/queryKeys";
import { afterSignupHelper } from "@/helpers/after-signup.helper";
import { useToast } from "@chakra-ui/react";
import Alert from "@/components/Utilities/Alert";

export const useSignupUserLocal = ({ shouldLoginAfter, mutationFn }) => {
  const toast = useToast();
  const id = "signup-password-toast";

  const { isLoading, mutate, error, status, data, isSuccess } = useMutation({
    retry: 2,

    mutationKey: signupUserKey,

    mutationFn: mutationFn,

    onSuccess: (result) => {
      if (!toast.isActive(id)) {
        toast({
          id,
          duration: 9000,
          render: () => (
            <Alert mode="success" message="Sign up successful" toastId={id} />
          ),
        });
      }
      if (shouldLoginAfter === true) {
        afterSignupHelper(result);
      }
    },

    onError: ({ message }) => {
      if (!toast.isActive(id)) {
        toast({
          id,
          duration: 3.6e6,
          render: () => <Alert mode={status} message={message} toastId={id} />,
        });
      }
    },

    onMutate: () => {
      if (toast.isActive(id)) {
        toast.close(id);
      }
    },
  });

  return {
    isLoading,
    mutate,
    error,
    status,
    data,
    isSuccess,
  };
};
