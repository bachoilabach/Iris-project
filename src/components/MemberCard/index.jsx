import LindkedIn from '/public/icons/linkedin.svg';

/* eslint-disable react/prop-types */
const MemberCard = ({ img, name, position, alt, index }) => {
	return (
		<div className="inline-flex flex-col gap-6 overflow-hidden w-full sm:mt-0 mt-8 sm:px-0 px-4">
			<div className="xl:w-96 xl:h-96 lg:w-64 lg:h-64 overflow-hidden rounded-3xl relative xl:min-h-96 aspect-square">
				<img
					className={`${
						(index !== 0) & (index !== 2)
							? 'object-[cente_top] scale-110 h-full'
							: 'object-top'
					} w-full  object-cover filter grayscale brightness-90 `}
					src={img}
					alt={alt}
					loading="lazy"
				/>
				<div className="absolute inset-0 bg-[#D9D9D9] mix-blend-color" />
			</div>

			<div className="w-full flex-col justify-start items-start gap-1 inline-flex">
				<div className="self-stretch justify-between items-center inline-flex">
					<div className="text-[#1f212e] text-xl font-extrabold font-sans leading-7">
						{name}
					</div>
					<div className="p-1.5 bg-[#20212f] rounded flex-col justify-center items-center gap-2.5 inline-flex">
						<div className="w-4 h-4 relative  overflow-hidden">
							<div className="w-[12.80px] h-[12.80px] left-[1.60px] top-[1.60px] absolute">
								<img
									src={LindkedIn}
									className="transition-colors filter invert"
								/>
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
