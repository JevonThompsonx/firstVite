interface PropertyItem {
  name: string;
  rating: number;
  price: number;
  key?: number;
}

const PropertyListItem = ({ name, rating, price }: PropertyItem) => {
  return (
    <li>
      <h1>{name}</h1>
      <h3>${price}</h3>
      <h4>⭐{rating}</h4>
    </li>
  );
};

export default PropertyListItem;
