import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import UseAuth from "../../../../Hooks/UseAuth";

const PaymentHistory = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: payments } = useQuery({
    queryKey: "payments",
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h1>wow this is payment history</h1>
    </div>
  );
};

export default PaymentHistory;
