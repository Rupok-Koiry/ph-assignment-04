import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createOrder as createOrderService } from "../../services/apiOrders";

export function useCreateOrder() {
  const queryClient = useQueryClient();

  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: createOrderService,
    onSuccess: () => {
      toast.success("New order successfully created");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isPending, createOrder };
}
