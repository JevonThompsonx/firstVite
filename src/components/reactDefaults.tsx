import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import { useState } from "react";
const title = "Rizzler";
const ReactDefaults = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<div className="flex flex-row justify-evenly">
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>

				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>{import.meta.env.VITE_NAME}</h1>
			{title === "Rizzler" ? (
				<h2 className="text-2xl text-blue-500">{title}</h2>
			) : (
				<h2 className="text-2xl text-red-500">{title}</h2>
			)}
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					Bleh bleh bleh count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs text-teal-600">
				Click on da Vite and React logos to learn more
			</p>
		</>
	);
};
export default ReactDefaults;
