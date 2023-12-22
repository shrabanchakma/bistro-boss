import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import axios from "axios";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCart from "../../../Hooks/UseCart";
const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseCart();
  const handleAddToCard = (food) => {
    console.log(food);
    if (user && user?.email) {
      // call api
      const itemInfo = {
        menuId: _id,
        userEmail: user.email,
        name,
        image,
        price,
      };
      axiosSecure
        .post("http://localhost:5000/carts", itemInfo)
        .then(() => refetch());
    } else {
      Swal.fire({
        title: "You're not logged in",
        text: "Do you want to log in first?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute top-3 right-4 bg-slate-800 py-2 px-4 text-white">
        ${price}
      </p>
      <div className="card-body  flex flex-col items-center relative">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCard(item)}
            className="btn btn-outline uppercase border-0 border-b-4 text-yellow-600 hover:text-yellow-600"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
