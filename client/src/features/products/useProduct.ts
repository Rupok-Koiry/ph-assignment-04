import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";

export function useProduct(productId: string) {
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(productId),
  });

  return { isLoading, error, product };
}
