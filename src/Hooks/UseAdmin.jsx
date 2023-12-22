import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: isAdmin, isPending: isAdminPending } = useQuery({
    queryKey: [user?.userEmail, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data.admin);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminPending];
};

export default UseAdmin;
