import { listCard } from '../../json/listCard';
import FeatureCard from '../../components/FeatureCard';
import NFTImage from '../../assets/nft.png';
import MVPProduct from '/public/mvp_product.svg';
import BrainWave from '../../assets/brainwave.png';
import playIcon from '/public/icons/play.svg';
import TitleAndDescription from '../../components/TitleAndDescription';
export default function OurFeature() {
	return (
		<>
			<div className="mt-[100px] xl:px-28 md:px-20 px-4 flex flex-col items-center sm:mb-[120px] mb-10">
				<TitleAndDescription
					title={'Our'}
					titleGradient={'Features'}
					description={`We are inheriting the values and influences previously built at FPT,
					and aim to develop
					and bring our products to the world.`}
				/>

				<div className="flex flex-wrap md:mt-4 mt-10 mb-10 md:gap-8 gap-6 w-full">
					{listCard.map((card, index) => (
						<FeatureCard
							image={card.image}
							key={index}
							size={card.size}
							title={card.title}
							description={card.description}
						/>
					))}
				</div>
				<div className="text-center text-[#1f212e] xl:text-[32px] sm:text-[28px] text-[26px] font-light font-sans leading-9 sm:leading-[48px]">
					Our Mission is to support the development of distinctive, lasting and
					substantial NFT Games and to build
				</div>
				<div className="justify-start items-center gap-3 sm:inline-flex flex-col">
					<div className="text-center text-[#1f212e] xl:text-6xl text-4xl font-extrabold font-sans capitalize sm:leading-[90px] leading-[54px] mt-2 sm:mt-0">
						a trusted
					</div>

					<img
						className="rounded-3xl xl:w-[119px] w-[80px] sm:block hidden"
						src={NFTImage}
						loading="lazy"
					/>

					<div className="text-center text-[#1f212e] xl:text-6xl text-4xl font-extrabold font-sans capitalize sm:leading-[90px] leading-[54px]">
						NFT Game Ecosystem
					</div>
				</div>
			</div>
			<div className="relative overflow-x-hidden">
				<img
					src={MVPProduct}
					alt="MVP Product"
					className="w-full object-cover"
				/>
				<div className="xl:px-28 sm:px-20 px-4 sm:mt-[-40px] -mt-3">
					<div className="sm:border-[12px] border-8 backdrop-blur-[5px] border-[#5c5e64] sm:rounded-[32px] rounded-3xl relative">
						<img
							src={BrainWave}
							className="object-cover rounded-xl"
							loading="lazy"
						/>
						<img
							src={playIcon}
							className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
