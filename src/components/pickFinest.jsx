import img from "../boy.jpg";
import { useEffect, useState } from "react";

const PickFinest = ({ gender }) => {
	const [users, setUsers] = useState([]);
	const [img1, setImg1] = useState("");
	const [img2, setImg2] = useState("");

	useEffect(() => {
		fetch(`https://randomuser.me/api/?results=2&gender=${gender}&inc=picture`)
			.then((res) => res.json())
			.then((data) => {
				setImg1(data.results[0].picture.medium);
				setImg2(data.results[1].picture.medium);
				setUsers(data.results);
				console.log(data.results[0].picture.thumbnail);
			})
			.catch((err) => console.log(err));
	}, []);

	const chooseUser1 = () => {
		fetch(`https://randomuser.me/api/?results=1&gender=${gender}&inc=picture`)
			.then((res) => res.json())
			.then((data) => {
				setImg2(data.results[0].picture.medium);
			})
			.catch((err) => console.log(err));
	};

	const chooseUser2 = () => {
		fetch(`https://randomuser.me/api/?results=1&gender=${gender}&inc=picture`)
			.then((res) => res.json())
			.then((data) => {
				setImg1(data.results[0].picture.medium);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className=" bg-gray-100 flex justify-center items-center" style={{ height: "100vh", width: "100vw" }}>
			{" "}
			<div>
				<h2 className=" mb-5 font-bold text-2xl text-center">
					Who would you rather go out with? <br /> <i className="fa fa-heart text-pink-400"></i>
					<i className="fa fa-heart text-pink-400"></i> <br />{" "}
					<small className=" text-xs italic">Keep clicking until you find the Chosen one:</small>
				</h2>
				<div className=" grid grid-cols-2 gap-3 p-3">
					<button onClick={() => chooseUser1()} className=" border-4 focus:border-pink-500 rounded-md ">
						<img src={img1} alt="" className="  h-72 object-cover rounded-md w-full" />
					</button>

					<button onClick={() => chooseUser2()} className=" border-4 focus:border-pink-500 rounded-md ">
						<img src={img2} alt="" className="  h-72 object-cover rounded-md w-full" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default PickFinest;
