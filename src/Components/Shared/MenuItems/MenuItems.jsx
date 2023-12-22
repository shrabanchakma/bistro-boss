const MenuItems = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        src={image}
        alt="image"
        className="w-[120px]"
      />
      <div>
        <h3 className="uppercase ">{name}-----------</h3>
        <p className="font-thin">{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItems;
