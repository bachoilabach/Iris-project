/* eslint-disable react/prop-types */
const BackerAdvisorCard = ({name, img, position}) => {
	return (
		<div className="aspect-auto">
			<img src={img} className={` mb-6 rounded-3xl`} />
			<div className="self-stretch h-[52px] flex-col justify-start items-center gap-2 flex">
				<div className="self-stretch text-center text-[#1f212e] text-xl font-extrabold font-sans leading-7">
                    {name}
				</div>
				<div className="self-stretch text-center text-[#63657b] text-xs font-medium font-['Azeret Mono'] uppercase leading-none tracking-wide">
					{position}
				</div>
			</div>
		</div>
	);
};

export default BackerAdvisorCard;
