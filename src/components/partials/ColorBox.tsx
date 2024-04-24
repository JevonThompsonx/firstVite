import { useState } from "react";
import getRandomColor from "../../utils/getRandomColor";
export default function ColorBox() {
	const [boxColor, setBoxColor] = useState(getRandomColor());
	const changeBoxColor = () => {
		let newColor = getRandomColor();
		if (newColor === boxColor) {
			while (newColor === boxColor) {
				newColor = getRandomColor();
			}
		}
		setBoxColor(newColor);
	};
	return (
		<div
			className={`w-14 h-14 border border-black ${boxColor} flex justify-center items-center  `}
			onClick={changeBoxColor}
		></div>
	);
}
