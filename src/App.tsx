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
// import PropertyList from "./components/PropertyList";
import ButtonTest from "./components/ButtonTest";
import FormTest from "./components/FormTest";
import Alert from "./components/Alert";
import StateTest from "./components/StateTest";
import ColorBoxes from "./components/ColorBoxes";

//endGoal = Make all of these react elements appear in a list than can be displayed on selection

function App() {
	const colors = ["red", "blue", "orange", "yellow"];
	return (
		<>
			<ColorBoxes />
			<StateTest />
			<Alert alertMessage="HIII!!" buttonMessage="Click here for an alert" />

			<FormTest />
			<ButtonTest />
			{/*<PropertyList />*/}
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
