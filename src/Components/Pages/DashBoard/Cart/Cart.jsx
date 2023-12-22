import Swal from "sweetalert2";
import UseCart from "../../../../Hooks/UseCart";
import CartRowItem from "./CartRowItem";
import CartTableHeadings from "./CartTableHeadings";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = UseAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res.data.deletedCount);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          } else {
            Swal.fire("Something Went wrong!", "Please try later !", "warning");
          }
        });

        //
      }
    });
  };
  return (
    <div className="border rounded-xl">
      <div className="flex justify-evenly uppercase text-4xl">
        <h2>total orders: {cart.length}</h2>
        <h2>total price: ${totalPrice}</h2>
        {cart.length ? (
          <Link to={"/dashboard/payment"}>
            <button className="btn btn-primary">pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            pay
          </button>
        )}
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <CartTableHeadings />
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <CartRowItem
                key={item._id}
                idx={idx + 1}
                item={item}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <CartTableHeadings />
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
