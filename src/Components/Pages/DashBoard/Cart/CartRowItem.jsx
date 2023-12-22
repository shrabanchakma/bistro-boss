import PropTypes from "prop-types";
import { IoTrashBin } from "react-icons/io5";
const CartRowItem = ({ item, idx, handleDelete }) => {
  return (
    <tr>
      <th>
        <label>{idx}</label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={item.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <p>{item.name}</p>
      </td>
      <td>
        <span>${item.price}</span>
      </td>
      <th>
        <button
          onClick={() => handleDelete(item._id)}
          className="btn btn-ghost btn-xs"
        >
          <IoTrashBin className="text-xl text-red-500" />
        </button>
      </th>
    </tr>
  );
};

export default CartRowItem;

CartRowItem.propTypes = {
  item: PropTypes.object,
  idx: PropTypes.number,
  handleDelete: PropTypes.func,
};
