import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ImgCard from "./ImgCard";
import NavBar from "./NavBar";

const Home = () => {
	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState("");
	const [category, setCategory] = useState("");
	const [categories] = useState([
		"backgrounds",
		"fashion",
		"science",
		"education",
		"feelings",
		"people",
		"religion",
		"places",
		"animals",
		"computer",
		"food",
		"travel",
		"buildings",
		"music",
	]);
	const [isActive, setActive] = useState(false);
	const apiKey = "19000908-146a2634c8dfdeaccfa24cb7b";
	const toggleClass = () => {
		setActive(!isActive);
	};

	useEffect(() => {
		fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&category=${category}&per_page=16`)
			.then((res) => res.json())
			.then((data) => {
				setPhotos(data.hits);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [term, category]);
	return (
		<div>
			<NavBar searchText={(text) => setTerm(text)} />
			<div className="p-2 overflow-auto whitespace-nowrap">
				{categories.map((category, i) => (
					<button
						key={i}
						onClick={() => {
							setCategory(category);
							toggleClass();
						}}
						className=" bg-gray-200 px-3 py-1 rounded-full mr-2 border border-gray-400 focus:bg-pink-400"
					>
						{" "}
						{category}
					</button>
				))}
			</div>
			{isLoading ? (
				<div className=" fixed bg-gray-200 top-0 left-0 w-full h-full flex justify-center items-center">
					{" "}
					<h3> Loading Photos...</h3>{" "}
				</div>
			) : (
				<div className=" p-3 grid grid-cols-1 lg:grid-cols-4 gap-3">
					{photos.map((photo) => (
						<ImgCard key={photo.id} photo={photo} />
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
