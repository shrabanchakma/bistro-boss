import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../../assets/menu/banner3.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";
import UseMenu from "../../../../Hooks/UseMenu";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import dessertCoverImg from "../../../../assets/menu/dessert-bg.jpeg";
import pizzaCoverImg from "../../../../assets/menu/pizza-bg.jpg";
import saladCoverImg from "../../../../assets/menu/salad-bg.jpg";
import soupsCoverImg from "../../../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [menu] = UseMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={coverImg}
        title={"Our Menu"}
        subTitle={"would you like to try a dish?"}
      />
      <SectionTitle subHeading={"Don't miss"} heading={"today's offer"} />
      <MenuCategory items={offered} />
      <MenuCategory
        items={dessert}
        itemImg={dessertCoverImg}
        title="DESSERT"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        items={pizza}
        itemImg={pizzaCoverImg}
        title="PIZZA"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        items={salad}
        itemImg={saladCoverImg}
        title="SALAD"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        items={soup}
        itemImg={soupsCoverImg}
        title="SOUP"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </div>
  );
};

export default Menu;
