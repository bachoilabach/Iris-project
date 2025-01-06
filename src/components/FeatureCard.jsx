import rightArrowIcon from '/public/icons/right-arrow.svg';
/* eslint-disable react/prop-types */
export default function FeatureCard({ image, size, title, description }) {
	return (
		<div
			className={`${size} relative hover:drop-shadow-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 group`}>
			<img src={image} className="rounded-2xl object-cover w-full" />

			<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/50 via-transparent to-transparent"></div>

			<div className="absolute inset-0 flex flex-col justify-start p-8">
				<div className="text-white text-[32px] font-extrabold font-sans capitalize leading-[48px]">
					{title}
				</div>
				<div className="text-[#cacaca] text-lg font-semibold font-sans leading-[27px] mt-4">
					{description}
				</div>
			</div>

			<div className="absolute bottom-4 right-4 bg-white/90 rounded-2xl p-4 hidden group-hover:block">
				<img src={rightArrowIcon} />
			</div>
		</div>
	);
}
