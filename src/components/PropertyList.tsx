// Mission: Create a PropertyList that takes a list item component and displays a name, rating, and price per night
//
import PropertyListItem from "./partials/PropertyListItem";

interface PropertyItem {
	name: string;
	rating: number;
	price: number;
	key: number;
}
// Chatgpt generated. Prompt: "Give me a javascript array of 5 objects, each object should contain a 'name' as a string variable that could be used as the name of an airbnb property, a 'rating' from 0 to 5 as float value rounded up to the nearest tenth place, and a 'price' value from 0 to 200 as a number"
const exProperties = [
	{
		name: "Cozy Cabin",
		rating: 4.3,
		price: 120,
		key: 12345,
	},
	{
		name: "Sunny Villa",
		rating: 4.8,
		price: 150,
		key: 23456,
	},
	{
		name: "Beach Bungalow",
		rating: 4.5,
		price: 180,
		key: 34567,
	},
	{
		name: "Mountain Retreat",
		rating: 4.6,
		price: 100,
		key: 45678,
	},
	{
		name: "City Loft",
		rating: 4.2,
		price: 90,
		key: 56789,
	},
];

const PropertyList = ({
	PropertyListUl = exProperties,
}: { PropertyListUl: PropertyItem[] }) => {
	return (
		<div className="flex w-full h-fit justify-center items-center mb-5">
			<ul className="flex justify-evenly items-center w-4/5 h-fit">
				{PropertyListUl.map((item: PropertyItem) => {
					return (
						<PropertyListItem
							name={item.name}
							rating={item.rating}
							price={item.price}
							key={item.key}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default PropertyList;
