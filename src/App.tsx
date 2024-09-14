import "./App.css";
// import Nav from "./pages/partials/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dice from "./pages/Dice";
import RandPokemon from "./pages/RandPokemon";

import Greeter from "./pages/Greeter";
import List from "./pages/List";
import FauxObject from "./pages/FauxObject";
import DiceConditional from "./pages/DiceConditional";
import ColorArray from "./pages/ColorArray";
import Slots from "./pages/Slots";
import GroceryListUl from "./pages/GroceryList";
import PropertyList from "./pages/PropertyList";
import ButtonTest from "./pages/ButtonTest";
import FormTest from "./pages/FormTest";
import Alert from "./pages/Alert";
import StateTest from "./pages/StateTest";
import ColorBoxes from "./pages/ColorBoxes";
import ColorBox from "./components/ColorBox";
import Home from "./pages/Home";
import PropertyListItem from "./components/PropertyListItem";
import ReactDefaults from "./pages/reactDefaults";
import NotFound from "./pages/Not_found";
export default function App() {

  const colors = ["red", "blue", "orange", "yellow"];
  const groceryList = [
    { key: 1, item: "Apple", quantity: 12, acquired: true },
    { key: 2, item: "Banana", quantity: 2, acquired: true },
    { key: 3, item: "Green apples", quantity: 10, acquired: false },
  ]
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color_box" element={<ColorBox />} />
        <Route path="/color_boxes" element={<ColorBoxes />} />
        <Route path="/StateTest" element={<StateTest />} />
        <Route path="/form_test" element={<FormTest />} />
        <Route path="/button_test" element={<ButtonTest />} />
        <Route path="/grocery_list" element={<GroceryListUl
          array={groceryList}
        />
        } />
        <Route path="/alert" element={<Alert alertMessage="HIII!!" buttonMessage="Click here for an alert" />} />
        <Route path="/color_boxes" element={<ColorBox />} />

        <Route path="/slots" element={
          <Slots array={[4, 6, 4]} />
        } />
        <Route path="/slots2" element={
          <Slots array={["name", "age", "sign"]} />
        } />
        <Route path="/slots3" element={
          <Slots array={[4, "age", 5]} />
        } />
        <Route path="/color_array" element={
          <ColorArray colors={colors} />
        } />
        <Route path="/dice" element={<Dice />} />
        <Route path="/dice_conditional" element={<DiceConditional />} />
        <Route path="/greeter" element={<Greeter />} />
        <Route path="react_defaults" element={
          <ReactDefaults />
        } />
        <Route path="list" element={
          <List aList={[24, 24, 22]} />
        } />
        <Route path="rand_pokemon" element={
          <RandPokemon />
        } />
        <Route path="faux_object" element={
          <FauxObject props={{ name: "Jack", age: 30 }} />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

