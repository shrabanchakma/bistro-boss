import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: isAdmin, isPending: isAdminPending } = useQuery({
    queryKey: [user?.userEmail, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      console.log("checking admin");
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminPending];
};

export default UseAdmin;
