import { useParams } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import UseAxiosPublic from "../../../../Hooks/UseAxiosPublic";

const UpdateItems = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  console.log(id);
  const axiosPublic = UseAxiosPublic();
  useEffect(() => {
    axiosPublic.get(`/menu/${id}`).then((res) => setItem(res.data));
  }, [id]);
  return (
    <div>
      <SectionTitle heading={"Update item"} subHeading={"Item"} />
    </div>
  );
};

export default UpdateItems;
