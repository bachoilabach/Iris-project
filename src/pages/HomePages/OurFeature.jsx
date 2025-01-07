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
			<div className="mt-[100px] px-28 flex flex-col items-center mb-[120px]">
				<TitleAndDescription
					title={'Our'}
					titleGradient={'Features'}
					description={`We are inheriting the values and influences previously built at FPT,
					and aim to develop
					and bring our products to the world.`}
				/>

				<div className="flex flex-wrap mt-4 mb-10 gap-8">
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
				<div className="text-center text-[#1f212e] text-[32px] font-light font-['Plus Jakarta Sans'] leading-[48px]">
					Our Mission is to support the development of distinctive, lasting and
					substantial NFT Games and to build
				</div>
				<div className="justify-start items-center gap-3 inline-flex">
					<div className="text-center text-[#1f212e] text-6xl font-extrabold font-['Plus Jakarta Sans'] capitalize leading-[90px]">
						a trusted
					</div>

					<img className="rounded-3xl" src={NFTImage} width={119} />

					<div className="text-center text-[#1f212e] text-6xl font-extrabold font-sans capitalize leading-[90px]">
						NFT Game Ecosystem
					</div>
				</div>
			</div>
			<div className="relative overflow-x-hidden ">
				<img
					src={MVPProduct}
					alt="MVP Product"
					className="w-full object-cover"
				/>
				<div className="px-28 min-h-[912px] mt-[-40px]">
					<div className="border-[12px] backdrop-blur-[5px] border-[#5c5e64] rounded-[32px] relative">
						<img src={BrainWave} className="object-cover rounded-2xl" />
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
