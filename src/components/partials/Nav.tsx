const Nav = () => {
	return (
		<nav className="">
			<h1>Nav bar here</h1>
			<div className="flex flex-row justify-evenly w-full">
				<a
					href="www.google.com"
					className="button flex p-2 bg-sky-500 w-1/5 rounded-xl justify-center item-center text-red-700 hover:text-zinc-900"
				>
					Page
				</a>
			</div>
		</nav>
	);
};

export default Nav;
