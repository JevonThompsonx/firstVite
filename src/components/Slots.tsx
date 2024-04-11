// goal : Make a slot machine like component
// that generates emojis,
// check if they match
// and renders accordingly
import getRandomInt from "../utils/getRandomInt";
const arrayOfValues = [3, 2, 1];
const Slots = ({ array = arrayOfValues }: { array: any[] }) => {
	const generateRandomFruit = () => array[getRandomInt(3)];
	const fruit1 = generateRandomFruit();
	const fruit2 = generateRandomFruit();
	const fruit3 = generateRandomFruit();
	const win = fruit3 === fruit2 && fruit1 === fruit3 ? true : false;
	return (
		<div className="my-4">
			<h2>Results are in: </h2>

			<div className="flex flex-row justify-center items-center">
				<p>{fruit1}-</p>
				<p>{fruit2}-</p>
				<p>{fruit3}</p>
			</div>
			<h3 className={win ? "text-green-600" : "text-red-600"}>
				{win ? "You win" : "You lose"}{" "}
			</h3>
			{win && <h2 className="text-cyan-900">Congrats!!</h2>}
		</div>
	);
};

export default Slots;
