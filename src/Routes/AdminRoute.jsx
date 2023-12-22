import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const [isAdmin, isAdminPending] = UseAdmin();
  const location = useLocation();
  if (loading || isAdminPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/"} state={{ from: location }} replace />;
};

export default AdminRoute;
