import { FaEnvelope } from "react-icons/fa";
import { IoCartSharp, IoHomeOutline, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import UserNavlinks from "./UserNavlinks";
import AdminNavlinks from "./AdminNavlinks";
import UseAdmin from "../../../../Hooks/UseAdmin";
const DashBoardOptions = () => {
  // todo: get isAdmin data from
  const [isAdmin] = UseAdmin();
  // const isAdmin = false;
  return (
    <div className="w-64 min-h-screen bg-orange-500 p-4">
      <ul className="menu">
        {isAdmin ? (
          <>
            <AdminNavlinks />
          </>
        ) : (
          <>
            <UserNavlinks />
          </>
        )}
        {/* shared nav links */}
        <div className="divider"></div>
        <li>
          <NavLink className={"text-xl uppercase"} to={"/"}>
            <IoHomeOutline />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={"text-xl uppercase"} to={"/"}>
            <IoMenu />
            menu
          </NavLink>
        </li>
        <li>
          <NavLink className={"text-xl uppercase"} to={"/"}>
            <IoCartSharp />
            shop
          </NavLink>
        </li>
        <li>
          <NavLink className={"text-xl uppercase"} to={"/"}>
            <FaEnvelope />
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashBoardOptions;
