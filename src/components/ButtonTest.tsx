const handleClick = () => {
	console.log("You clicked me! Thanks!!");
};

export default function ButtonTest() {
	return (
		<div className="m-2">
			<p>Click the button Human</p>
			<button
				className="border border-red-700 bg-sky-500 text-red-700 mt-2"
				onClick={() => console.log("You clicked me! Thanks!!")}
				type="button"
			>
				Click me
			</button>
		</div>
	);
}
