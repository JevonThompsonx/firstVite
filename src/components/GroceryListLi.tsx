const GroceryListLi = ({
	item,
	quantity,
	acquired,
}: { item: string; quantity: number; acquired: boolean }) => {
	return (
		<>
			<li className={acquired ? "line-through" : ""}>
				{item} -
				{acquired ? ` There are ${quantity} left` : ` Still need ${quantity}`}
			</li>
		</>
	);
};

export default GroceryListLi;
