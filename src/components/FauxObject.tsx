const fauObjectDefaults = {
	name: "Jevon",
	age: 22,
};

const FauxObject = ({ props = fauObjectDefaults }) => {
	return (
		<div className="my-4">
			<h2>Name is {props.name}</h2>
			<h3>Age is {props.age}</h3>
		</div>
	);
};

export default FauxObject;
