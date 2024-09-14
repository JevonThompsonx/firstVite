// import { useState } from "react";
import ColorBox from "../components/ColorBox";
import Nav from "../components/Nav";
const boxes: any[] = [];
for (let index = 0; index < 18; index++) {
  boxes.push(<ColorBox />);
}
console.log(boxes);
// add functionality to test if squares in the row or columns equal the same color
export default function ColorBoxes() {
  return (
    <div>
      <Nav />
      <h2 className="text-4xl ">Color boxes</h2>
      <h3>Click a square to change it's color and try to make them all red!</h3>
      <h4>Current red count</h4>
      <div className="flex flex-wrap items-center m-4">{boxes}</div>
    </div>
  );
}
