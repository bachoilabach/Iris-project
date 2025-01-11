/* eslint-disable react/prop-types */
const BackerAdvisorCard = ({ name, img, position, className }) => {
	return (
		<div className={`aspect-auto ${className}`}>
			<img src={img} className={` mb-6 rounded-3xl`} />
			<div className="self-stretch h-[52px] flex-col justify-start items-center gap-2 flex">
				<div className="self-stretch text-center text-[#1f212e] sm:text-xl text-4xl font-extrabold font-sans leading-7">
					{name}
				</div>
				<div className="self-stretch text-center text-[#63657b] sm:text-xs font-medium font-mono uppercase leading-none tracking-wide sm:mt-0 mt-2">
					{position}
				</div>
			</div>
		</div>
	);
};

export default BackerAdvisorCard;
