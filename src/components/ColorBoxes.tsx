import Row from "./partials/Row";
const row1 = Row();
const row2 = Row();
const row3 = Row();
const row4 = Row();
const row5 = Row();
const allRows = [row1, row2, row3, row4, row5];
// add functionality to test if squares in the row or columns equal the same color
export default function ColorBoxes() {
	return (
		<div>
			<h2 className="text-4xl ">Color Grid</h2>
			<h3>Click a square and try to match them all!</h3>
			<div className="flex flex-col items-center m-4">{allRows}</div>
		</div>
	);
}
