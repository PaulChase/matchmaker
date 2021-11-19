const ImgCard = ({ photo }) => {
	const tags = photo.tags.split(",");
	return (
		<div className=" border-2 border-gray-300 rounded-md">
			<img src={photo.webformatURL} alt="" className=" h-56 w-full rounded-t-md object-cover " />
			<div className="p-4">
				<h3 className=" my-2 font-semibold text-lg text-pink-500">Credits to: {photo.user} </h3>
				<p className=" text-gray-500 flex justify-between items-center">
					<span>
						<i className="fa fa-eye"></i> {photo.views}
					</span>
					<span>
						<i className="fa fa-download"></i> {photo.downloads}
					</span>
					<span>
						<i className="fa fa-heart"></i> {photo.likes}
					</span>
				</p>
			</div>
			<div className=" p-4">
				<p>
					{tags.map((tag, i) => (
						<span key={i} className=" bg-gray-200 text-sm px-3 py-1 inline-block rounded-md mr-2 mb-2">
							{tag}
						</span>
					))}
				</p>
			</div>
		</div>
	);
};

export default ImgCard;
