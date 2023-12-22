import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItems from "../../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, itemImg, title, subTitle }) => {
  const route = `${title}`.toLowerCase();
  return (
    <div>
      {itemImg && (
        <Cover img={`${itemImg}`} title={title} subTitle={subTitle} />
      )}
      <div className="grid grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center my-5">
        <Link
          to={`/order/${route}`}
          className="btn btn-outline uppercase border-0  border-b-4"
        >
          read more
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
