import { useEffect, useState } from "react";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";

const PopularItems = () => {
  const [menu] = UseMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <>
      <section className="my-14">
        <SectionTitle heading="from our menu" subHeading={"Check it Out"} />
        <div className="grid grid-cols-2 gap-6">
          {popularItems.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularItems;
