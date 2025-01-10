import triangle from '/public/assets/triangle.png';
import CarouselSlider from '../../components/CarouselSlider';
import Filter from '../../components/Filter';

const News = () => {
	return (
		<div className="relative px-28 flex flex-col gap-12 mb-32">
			<img
				src={triangle}
				className="absolute -top-20 left-1/4 rotate-[70.18deg] blur-sm"
				width={71}
			/>

			<div className="h-[148px] flex-col justify-start items-center gap-4 inline-flex">
				<div className="text-center">
					<span className="text-[#1f212e] text-6xl font-extrabold font-sans capitalize leading-[90px]">
						News
					</span>
					<span className="text-[#e04834] text-6xl font-extrabold font-sans capitalize leading-[90px]">
						.
					</span>
				</div>
				<Filter />
			</div>
			<CarouselSlider />
			<div className="text-center text-[#1f212e] text-xl font-medium font-sans underline leading-7">
				View all news
			</div>
		</div>
	);
};

export default News;
