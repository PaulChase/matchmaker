const Home = ({ changeGender }) => {
	return (
		<div
			className="bg-gradient-to-r from-green-400 to-blue-500 flex p-4  justify-center items-center "
			style={{ height: "100vh", width: "100vw" }}
		>
			<div>
				<h3 className=" my-4 text-4xl text-white text-center block font-bold">
					<i className="fa fa-heart text-pink-400"></i> Match Maker{" "}
					<i className="fa fa-heart text-pink-400"></i>
					<br /> <small className=" text-xs italic">Let's help you find a date:</small>
				</h3>

				<div className=" grid grid-cols-1 gap-4 p-3 ">
					<h4 className=" text-center font-semibold my-3 text-white font-mono text-xl">
						What's your Gender?
					</h4>
					<button
						onClick={() => changeGender("female")}
						className=" px-3 py-2 bg-purple-500 rounded-md  font-semibold "
					>
						<i className="fa fa-male mx-2"></i>
						Male
					</button>
					<button
						onClick={() => changeGender("male")}
						className=" px-3 py-2 bg-pink-400 rounded-md  font-semibold"
					>
						<i className="fa fa-female mx-2"></i>
						Female
					</button>
				</div>
				<small className=" text-center text-white text-xs italic">powered by: RandomUser API</small>
			</div>
		</div>
	);
};

export default Home;
