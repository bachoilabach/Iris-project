import LindkedIn from '/public/icons/linkedin.svg';

/* eslint-disable react/prop-types */
const MemberCard = ({ img, name, position, alt }) => {
	return (
		<div className="w-96 inline-flex flex-col gap-6 ">
			<div className="w-full h-96 overflow-hidden rounded-3xl relative">
				<img
					className="w-full h-full object-cover object-top filter grayscale-[70%]"
					src={img}
					alt={alt}
				/>
			</div>
			<div className="w-96 h-12 flex-col justify-start items-start gap-1 inline-flex">
				<div className="self-stretch justify-between items-center inline-flex">
					<div className="text-[#1f212e] text-xl font-extrabold font-sans leading-7">
						{name}
					</div>
					<div className="p-1.5 bg-[#20212f] rounded flex-col justify-center items-center gap-2.5 inline-flex">
						<div className="w-4 h-4 relative  overflow-hidden">
							<div className="w-[12.80px] h-[12.80px] left-[1.60px] top-[1.60px] absolute">
								<img src={LindkedIn} />
							</div>
						</div>
					</div>
				</div>
				<div className="text-[#63657b] text-xs font-medium font-mono uppercase leading-none tracking-wide">
					{position}
				</div>
			</div>
		</div>
	);
};

export default MemberCard;
