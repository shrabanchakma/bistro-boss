import Swal from "sweetalert2";
import UseMenu from "../../../../Hooks/UseMenu";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import ItemHeadings from "./ItemHeadings";
import ItemRow from "./ItemRow";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";

const ManageItems = () => {
  const [menu, refetch] = UseMenu();
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
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          console.log(res.data.deletedCount);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "item has been deleted.", "success");
          } else {
            Swal.fire("Something Went wrong!", "Please try later !", "warning");
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle heading={"manage all items"} subHeading={"Hurry Up!"} />
      <div className="border rounded-xl">
        <div className="flex justify-evenly uppercase text-4xl">
          <h2>total orders: {menu.length}</h2>
          {/* <h2>total price: ${totalPrice}</h2> */}
          <button className="btn">pay</button>
        </div>
        {/* table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <ItemHeadings />
            </thead>
            <tbody>
              {menu.map((item, idx) => (
                <ItemRow
                  key={item._id}
                  idx={idx + 1}
                  item={item}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <ItemHeadings />
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
