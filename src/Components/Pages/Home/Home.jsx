import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularItems from "./PopularItems";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularItems />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
