import { useState } from "react";

export default function StateTest() {
	const [count, setCount] = useState(0);
	const changeCount = () => setCount(count + 1);
	const [emoji, setEmoji] = useState(true);
	const changeEmoji = () => setEmoji(!emoji);
	return (
		<>
			<div>
				<p>Here is the {count}</p>
				<button type="button" onClick={changeCount}>
					Click to change count
				</button>
			</div>

			<div>
				<button type="button" onClick={changeEmoji}>
					Click {emoji ? "😊" : "💀"}
				</button>
			</div>
		</>
	);
}
