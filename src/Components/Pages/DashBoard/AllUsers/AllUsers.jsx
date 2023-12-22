import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import UserRow from "./UserRow";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });
  const handleSetUserRole = async (user) => {
    try {
      await axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
        refetch();
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.userName} set to admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  const handleUserDelete = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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
    <div>
      <div className=" uppercase text-4xl">
        <h2>total users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, idx) => (
              <UserRow
                key={user._id}
                idx={idx}
                user={user}
                handleSetUserRole={handleSetUserRole}
                handleUserDelete={handleUserDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
