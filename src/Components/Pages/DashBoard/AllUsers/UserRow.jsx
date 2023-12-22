import { FaUsers } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

const UserRow = ({ handleSetUserRole, handleUserDelete, user, idx }) => {
  return (
    <tr>
      <th>{idx + 1}</th>
      <th>{user?.userName}</th>
      <td>{user?.userEmail}</td>
      <td>
        {user?.role ? (
          "admin"
        ) : (
          <button
            onClick={() => handleSetUserRole(user)}
            className="btn btn-ghost bg-[#D1A054] "
          >
            <FaUsers className="text-2xl text-white" />
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleUserDelete(user._id)}
          className="btn btn-ghost bg-red-500"
        >
          <IoTrashBin className="text-xl text-white" />
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
