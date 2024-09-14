const groceryList = [
  { key: 13, item: "Apples", quantity: 5, acquired: false },
  { key: 45, item: "Milk", quantity: 2, acquired: true },
  { key: 38, item: "Bread", quantity: 1, acquired: false },
  { key: 22, item: "Eggs", quantity: 12, acquired: true },
  { key: 7, item: "Bananas", quantity: 6, acquired: false },
];
import GroceryListLi from "../components/GroceryListLi";
import Nav from "../components/Nav";
const GroceryListUl = ({ array = groceryList }) => {
  return (
    <div>
      <Nav />
      <ul>
        {array.map((i) => {
          return (
            <GroceryListLi
              key={i.key}
              item={i.item}
              quantity={i.quantity}
              acquired={i.acquired}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default GroceryListUl;
