import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { FaBox, FaUser, FaUsers } from "react-icons/fa";
import { PiMoney } from "react-icons/pi";
const AdminHome = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <span className="block">
        Hey! Welcome {user?.displayName ? user.displayName : "back"}
      </span>
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-figure text-secondary">
            <PiMoney className="text-2xl" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats?.revenue}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-2xl" />
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value text-secondary">{stats?.users}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-figure text-secondary">
            <FaBox className="text-2xl" />
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats?.items}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-figure text-secondary">
            <FaBox className="text-2xl" />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.carts}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
