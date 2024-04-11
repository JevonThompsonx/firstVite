const Greeter = ({
	name = "Jeremy",
	from = "Beremy",
	age = 29,
}: { name: string; from: string; age: number }) => {
	return (
		<div className="my-4">
			<h1 className="text-sky-600">Hi there {name} </h1>
			<h2 className="text-cyan-200">- {from}</h2>
			<h3>{age}</h3>
		</div>
	);
};

export default Greeter;
