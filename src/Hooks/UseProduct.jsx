import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseProduct = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allProducts");
      return res.data;
    },
  });

  return [products, refetch];
};

export default UseProduct;
