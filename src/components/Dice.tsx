import getRandomInt from "../utils/getRandomInt";
import "../css/index.css";
const roll = () => getRandomInt(7);
const tripleRoll = () => {
	return (
		<div className="my-4">
			<h1>Dice roll:</h1>
			<h2 className="text-3xl die"> {roll()}</h2>
			<h2 className="text-3xl die"> {roll()}</h2>
			<h2 className="text-3xl die "> {roll()}</h2>
		</div>
	);
};
export default tripleRoll;
