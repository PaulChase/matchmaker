import { useState } from "react";

const NavBar = ({ searchText }) => {
	const [text, setText] = useState("");

	const HandleSearch = (e) => {
		e.preventDefault();
		searchText(text);
	};
	return (
		<nav className="bg-pink-500 p-3 lg:grid lg:grid-cols-5">
			<div className=" flex justify-between items-center  text-white lg:col-span-3">
				<h3 className=" font-semibold text-xl">
					<i className="fa fa-camera"></i> Paul's Album
				</h3>

				<div>
					<p className="italic">
						<small>powered by</small> <span>PIXABAY</span>
					</p>
				</div>
			</div>
			<div className=" py-2 lg:col-span-2">
				<form onSubmit={HandleSearch} className=" flex justify-between">
					<input
						onChange={(e) => setText(e.target.value)}
						type="text"
						className=" rounded-full py-1 px-3 w-full mr-2 focus:ring-2 outline-none"
					/>

					<button type="submit" className=" border-2 text-white px-3 py-1 rounded-full">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};

export default NavBar;
