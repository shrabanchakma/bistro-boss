import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  if (user) return children;
  return <Navigate state={{ from: location }} to={"/login"} replace />;
};

export default PrivateRoute;
