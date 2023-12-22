import { Outlet } from "react-router-dom";
import DashBoardOptions from "../Pages/DashBoard/Dashboard/DashBoardOptions";

const DashBoardLayout = () => {
  return (
    <div className="flex">
      <DashBoardOptions />
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
