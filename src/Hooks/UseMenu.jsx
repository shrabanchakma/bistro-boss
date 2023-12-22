import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseMenu = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

  return [menu, refetch];
};

export default UseMenu;
