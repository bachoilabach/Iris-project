import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCards } from 'swiper/modules';
import QuanTa from '../../assets/members/quan_ta.jpg';
import { useSelector } from 'react-redux';
import { filterSliderIndexSelector, slideSelector } from '../../store/selector';
import { useEffect, useRef } from 'react';

const CarouselSlider = () => {
	const slides = useSelector(slideSelector);
	const slideIndex = useSelector(filterSliderIndexSelector);
	const swiperRef = useRef(null);
	const swiperRefMobile = useRef(null);


	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.slideTo(Number(slideIndex));
			swiperRefMobile.current.slideTo(Number(slideIndex));
		}
	}, [slideIndex]);

	return (
		<>
		{/* Latop */}
			<div className="w-full sm:flex items-center justify-center hidden">
				<Swiper
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards]}
					initialSlide={Number(slideIndex)}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					className="xl:w-[904px] xl:h-[602px] lg:w-[804px] lg:h-[502px] aspect-auto">
					{slides.map((slide) => (
						<SwiperSlide
							key={slide.id}
							className="w-[350px] h-[400px] rounded-2xl overflow-hidden shadow-lg relative">
							<img
								src={slide.image}
								alt={slide.title}
								className="w-full h-full object-cover"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
							<div className="absolute bottom-5 left-5 text-white">
								<div className="h-6 px-3 py-1 bg-gradient-to-l from-[#ffa655] to-[#ea212d] rounded backdrop-blur-[5px] justify-center items-center gap-2.5 inline-flex">
									<div className="text-white text-[10px] font-extrabold font-['Plus Jakarta Sans'] uppercase leading-none tracking-wide">
										{slide.tag}
									</div>
								</div>
								<h2 className="text-white text-[32px] font-extrabold font-sans capitalize leading-[48px]">
									{slide.title}
								</h2>
								<div className="flex items-center mt-2 gap-3">
									<div className="w-10 h-10 relative overflow-hidden rounded-full border-2 border-white">
										<img
											className="object-cover w-full h-full filter grayscale"
											src={QuanTa}
											alt="Author's face"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<div className="text-white text-sm font-bold font-sans capitalize leading-tight">
											{slide.author}
										</div>
										<div className="text-[#cacaca] text-xs font-semibold font-['Plus Jakarta Sans'] leading-none">
											{slide.time}
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Mobile */}
			<div className="w-full sm:hidden items-center justify-center flex aspect-auto">
				<Swiper
					slidesPerView={'1'}
					centeredSlides={true}
					spaceBetween={30}
					initialSlide={Number(slideIndex)}
					onSwiper={(swiper) => (swiperRefMobile.current = swiper)}
					pagination={{
						clickable: true,
					}}
					className="w-[604px] h-[402px]">
					{slides.map((slide) => (
						<SwiperSlide
							key={slide.id}
							className="w-[350px] h-[400px] rounded-2xl overflow-hidden shadow-lg relative ">
							<img
								src={slide.image}
								alt={slide.title}
								className="w-full h-full object-cover"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
							<div className="absolute bottom-5 left-5 text-white">
								<div className="h-6 px-3 py-1 bg-gradient-to-l from-[#ffa655] to-[#ea212d] rounded backdrop-blur-[5px] justify-center items-center gap-2.5 inline-flex">
									<div className="text-white text-[10px] font-extrabold font-['Plus Jakarta Sans'] uppercase leading-none tracking-wide">
										{slide.tag}
									</div>
								</div>
								<h2 className="text-white text-2xl font-extrabold font-sans capitalize leading-normal">
									{slide.title}
								</h2>
								<div className="flex items-center mt-2 gap-3">
									<div className="w-10 h-10 relative overflow-hidden rounded-full border-2 border-white">
										<img
											className="object-cover w-full h-full filter grayscale"
											src={QuanTa}
											alt="Author's face"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<div className="text-white text-sm font-bold font-sans capitalize leading-tight">
											{slide.author}
										</div>
										<div className="text-[#cacaca] text-xs font-semibold font-['Plus Jakarta Sans'] leading-none">
											{slide.time}
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default CarouselSlider;
