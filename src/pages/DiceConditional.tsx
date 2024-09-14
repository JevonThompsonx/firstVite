import Nav from "../components/Nav";
import getRandomInt from "../utils/getRandomInt";

const DiceConditional = () => {
  const roll1 = getRandomInt(4);
  const roll2 = getRandomInt(4);
  const valid = roll1 === roll2 ? true : false;
  return (
    <div className="my-4">
      <Nav />
      <h2>With the goal of having equal rolls...</h2>
      <h3 className={valid ? "text-green-600" : "text-red-700"}>
        {valid ? "You win!!" : "You lose :( "}
      </h3>
      <p>Roll 1 : {roll1}</p>
      <p>Roll 2 : {roll2} </p>
    </div>
  );
};

export default DiceConditional;
