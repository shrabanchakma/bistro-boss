import {
  IoCalendar,
  IoCalendarClearSharp,
  IoCartSharp,
  IoHome,
  IoStar,
  IoWallet,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

const UserNavlinks = () => {
  return (
    <>
      <li>
        <NavLink className={"text-xl uppercase"} to={"/dashboard/cart"}>
          <IoCartSharp />
          cart
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-xl uppercase"} to={"/dashboard/user-home"}>
          <IoHome />
          User Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-xl uppercase"} to={"/dashboard/reservation"}>
          <IoCalendar />
          reservation
        </NavLink>
      </li>
      <li>
        <NavLink
          className={"text-xl uppercase"}
          to={"/dashboard/payment-history"}
        >
          <IoWallet />
          payment history
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-xl uppercase"} to={"/dashboard/review"}>
          <IoStar />
          add review
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-xl uppercase"} to={"/dashboard/my-booking"}>
          <IoCalendarClearSharp />
          my booking
        </NavLink>
      </li>
    </>
  );
};

export default UserNavlinks;
