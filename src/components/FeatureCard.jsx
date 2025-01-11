import rightArrowIcon from '/public/icons/right-arrow.svg';
/* eslint-disable react/prop-types */
export default function FeatureCard({ image, size, title, description }) {
	return (
		<div
			className={`shrink relative hover:drop-shadow-2xl cursor-pointer transition-transform duration-300 ease-in-out lg:hover:scale-105 group`}>
			<img src={image} className={`rounded-2xl object-cover w-full ${size} md:aspect-auto aspect-square`} loading='lazy'/>

			<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/50 via-transparent to-transparent"></div>

			<div className="absolute inset-0 flex flex-col justify-start md:p-8 p-5">
				<div className="text-white md:text-[32px] text-2xl font-extrabold font-sans capitalize md:leading-[48px] leading-9">
					{title}
				</div>
				<div className="text-[#cacaca] text-lg font-semibold font-sans leading-[27px] mt-4">
					{description}
				</div>
			</div>

			<div className="absolute bottom-4 right-4 bg-white/90 rounded-2xl p-4 hidden lg:group-hover:block ">
				<img src={rightArrowIcon} />
			</div>
		</div>
	);
}
