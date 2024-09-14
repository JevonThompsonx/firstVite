import Nav from "../components/Nav";
import getRandomInt from "../utils/getRandomInt";
const roll = () => getRandomInt(7);
const tripleRoll = () => {
  return (
    <div className="my-4">
      <Nav />
      <h1>Dice roll:</h1>
      <h2 className="text-3xl text-purple-700"> {roll()}</h2>
      <h2 className="text-3xl text-purple-700"> {roll()}</h2>
      <h2 className="text-3xl text-purple-700"> {roll()}</h2>
    </div>
  );
};
export default tripleRoll;
