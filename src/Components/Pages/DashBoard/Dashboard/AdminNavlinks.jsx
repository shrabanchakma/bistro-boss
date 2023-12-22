import { FaBook, FaHome, FaListUl, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserNavlinks = () => {
  return (
    <>
      <li>
        <NavLink className={"text-xl uppercase"} to={"/dashboard/user-home"}>
          <FaHome />
          Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-xl uppercase"} to={"/dashboard/add-items"}>
          <FaUtensils />
          add items
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-xl uppercase"} to={"/dashboard/manage-items"}>
          <FaListUl />
          manage items
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-xl uppercase"} to={"/dashboard/review"}>
          <FaBook />
          manage bookings
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-xl uppercase"} to={"/dashboard/all-users"}>
          <FaUsers />
          all users
        </NavLink>
      </li>
    </>
  );
};

export default UserNavlinks;
