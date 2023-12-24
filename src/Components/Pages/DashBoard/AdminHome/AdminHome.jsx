import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { FaBox, FaUser, FaUsers } from "react-icons/fa";
import { PiMoney } from "react-icons/pi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const AdminHome = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      console.log(res.data);
      return res.data;
    },
  });

  const { data: chartsData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
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
      <BarChart
        width={500}
        height={300}
        data={chartsData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Bar
          dataKey="quantity"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {chartsData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default AdminHome;
