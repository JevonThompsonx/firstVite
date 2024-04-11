import "./App.css";
// import Nav from "./components/partials/Nav";
import Dice from "./components/Dice";
// import ReactDefauls from "./components/reactDefaults";
import RandPokemon from "./components/RandPokemon";

import Greeter from "./components/Greeter";
import List from "./components/List";
import FauxObject from "./components/FauxObject";
import DiceConditional from "./components/DiceConditional";
import ColorArray from "./components/ColorArray";
import Slots from "./components/Slots";
import GroceryListUl from "./components/GroceryList";
function App() {
	const colors = ["red", "blue", "orange", "yellow"];
	return (
		<>
			<GroceryListUl
				array={[
					{ key: 1, item: "Apple", quantity: 12, acquired: true },
					{ key: 2, item: "Banana", quantity: 2, acquired: true },
					{ key: 3, item: "Green apples", quantity: 10, acquired: false },
				]}
			/>
			<Slots array={[4, 6, 4]} />
			<Slots array={["name", "age", "sign"]} />
			<Slots array={[4, "age", 5]} />
			<ColorArray colors={colors} />
			<DiceConditional />
			<Dice />
			{/* <ReactDefauls /> */}
			<List aList={[24, 24, 22]} />
			{/*@ts-ignore*/}
			<Greeter />
			<RandPokemon />
			<FauxObject props={{ name: "Jack", age: 30 }} />
			{/*	<RandPokemon /> */}
			{/*	<RandPokemon /> */}
		</>
	);
}

export default App;
