import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-img bg-fixed">
      <SectionTitle subHeading={"Check it Out"} heading={"from our menu"} />
      <div className="flex  items-center justify-center px-72 py-28 gap-16 bg-slate-400 bg-opacity-25">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="text-white">
          <h4>March 20, 2023</h4>
          <h4>WHERE CAN I GET SOME?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline uppercase border-0 text-white border-b-4">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
