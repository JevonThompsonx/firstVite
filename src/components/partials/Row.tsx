import ColorBox from "./ColorBox";
export default function Row() {
	return (
		<div className="flex flex-row justify-evenly items-center">
			{[<ColorBox />, <ColorBox />, <ColorBox />, <ColorBox />, <ColorBox />]}
		</div>
	);
}
