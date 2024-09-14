import Nav from "../components/Nav";
import getRandomInt from "../utils/getRandomInt";
//turn this into a who's that pokemon game
const RandPokemon = () => {
  const pokemonNumber = getRandomInt(152);
  const randomSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`;
  return (
    <div className="flex h-96 w-auto aspect-square flex-col justify-evenly items-center border border-solid my-4">
      <Nav />
      <h1>Pokemon #{pokemonNumber}</h1>
      <img
        className="w-28 h-auto aspect-square"
        src={randomSource}
        alt={`Pokemon number ${pokemonNumber} from the original 151 pokedex`}
      />
    </div>
  );
};

export default RandPokemon;
