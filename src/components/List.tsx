import getRandomInt from "../utils/getRandomInt";

const theList = [1, 2, 3, 5, 6, 7, 77];
const List = ({ aList = theList }) => {
	const randomListIndex = getRandomInt(theList.length);
	return (
		<div className="my-4">
			<p> Full list here {aList} </p>
			<p>A random value from List {aList[randomListIndex]}</p>
		</div>
	);
};

export default List;
