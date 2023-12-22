import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import { IoCartSharp } from "react-icons/io5";
import UseCart from "../../../Hooks/UseCart";
import UseAdmin from "../../../Hooks/UseAdmin";
const Navbar = () => {
  const { userlogOut, user } = UseAuth();
  const [isAdmin] = UseAdmin();
  const [cart] = UseCart();
  // console.log(cart);
  const handleLogOut = async () => {
    try {
      await userlogOut();
    } catch (err) {
      console.error(err);
    }
  };
  const navLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to={"/dashboard/admin-home"}>DashBoard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to={"/dashboard/user-home"}>DashBoard</Link>
        </li>
      )}
      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut} to={"/"}>
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar max-w-screen-2xl fixed z-10 bg-opacity-10 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/dashboard/cart"} className="flex items-center">
          <IoCartSharp className="text-2xl" />
          <div className="badge badge-secondary">+{cart.length}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
