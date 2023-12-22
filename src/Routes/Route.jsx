import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import MainLayout from "../Components/Layout/MainLayout";
import Menu from "../Components/Pages/Menu/Menu/Menu";
import Order from "../Components/Pages/Order/Order/Order";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoardLayout from "../Components/Layout/DashBoardLayout";
import Cart from "../Components/Pages/DashBoard/Cart/Cart";
import AllUsers from "../Components/Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Components/Pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Components/Pages/DashBoard/ManageItems/ManageItems";
import UpdateItems from "../Components/Pages/DashBoard/UpdateItems/UpdateItems";
import Payment from "../Components/Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Components/Pages/DashBoard/PaymentHistory/PaymentHistory";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      // user routes
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },

      // admin only routes
      {
        path: "add-items",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "update-item/:id",
        element: (
          <AdminRoute>
            <UpdateItems />
          </AdminRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Route;
