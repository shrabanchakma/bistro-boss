import { useForm } from "react-hook-form";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import UseAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const image_upload_key = import.meta.env.VITE_IMAGE_UPLOAD_KEY;
  const image_upload_api = `https://api.imgbb.com/1/upload?&key=${image_upload_key}`;

  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await axiosPublic.post(
        image_upload_api,
        { image: data.image[0] },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(res.data);
      if (res.data.success) {
        const menuInfo = {
          name: data.name,
          recipe: data.recipe,
          image: res.data.data.display_url,
          category: data.category,
          price: parseFloat(data.price),
        };
        const menuRes = await axiosSecure.post("/menu", menuInfo);
        console.log(menuRes.data);
        if (menuRes.data.insertedId) {
          console.log("Successfully Stored");
        }
      }
    } catch (err) {
      console.err(err);
    }
  };
  return (
    <div>
      <SectionTitle heading={"add an item"} subHeading={"what's new"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F3F3] rounded-lg p-9"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Recipe name*</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="recipe name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              defaultValue={""}
              {...register("category", { required: true })}
              className="select select-bordered w-full "
            >
              <option disabled value={""}>
                Category
              </option>
              <option value={"salad"}>salad</option>
              <option value={"pizza"}>pizza</option>
              <option value={"soups"}>soups</option>
              <option value={"dessert"}>dessert</option>
              <option value={"drinks"}>drinks</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="text"
              placeholder="price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered h-40"
            placeholder="details"
          ></textarea>
        </div>
        <input
          {...register("image")}
          type="file"
          className="file-input w-full max-w-xs block"
        />
        <input type="submit" className="btn bg-warning" />
      </form>
    </div>
  );
};

export default AddItems;
