import mockup from '/public/assets/mockup.png';
import Rectangle from '/public/assets/Rectangle.png';
import scrollIcon from '/public/icons/scroll.svg';
import bgLogo from '/public/bg_logo.svg';
import logo from '/public/logo.svg';
import ButtonContact from '../../components/ButtonContact';
import { listCard } from '../../json/listCard';
import FeatureCard from '../../components/FeatureCard';
import NFTImage from '../assets/nft.png';
export default function HomePage() {
	return (
		<div className="overflow-x-hidden">
		
			{/* Game distribution */}
			<div className="flex justify-between items-center px-28 bg-gradient-to-b from-[#FFF0EA] to-white pt-40">
				{/* Left */}
				<div className="flex-col justify-start items-start inline-flex -mt-6">
					<div className="flex-col justify-start items-start flex">
						<div className="text-[#1f212e] text-[56px] font-extrabold font-['Plus Jakarta Sans'] leading-[84px] tracking-wide">
							Game Distribution
						</div>
						<div className="justify-start items-center gap-4 inline-flex">
							<div className="text-[#1f212e] text-[56px] font-extrabold font-['Plus Jakarta Sans'] capitalize leading-[84px] tracking-wide">
								Platform supports{' '}
							</div>
						</div>
					</div>
					<div className="text-[80px] font-extrabold font-sans capitalize leading-[120px] tracking-wide bg-gradient-to-l from-[#FFA755] to-[#EB212D] text-transparent bg-clip-text mb-4">
						NFT games
					</div>
					<ButtonContact />
				</div>

				{/* Right */}
				<div className="relative">
					{/* Mockup nằm trên */}
					<img
						src={mockup}
						alt="Game Distribution Mockup"
						className="relative bg-transparent aspect-auto z-40"
						width={538}
						height={620}
					/>
					{/* Hình vuông nằm dưới */}
					<img
						src={Rectangle}
						alt="Decorative Rectangle"
						width={337}
						height={351}
						className="absolute bottom-[30px] right-[-110px] z-0 rotate-[60deg] blur-[50px]"
					/>
				</div>
			</div>
			<div className="flex flex-col items-center space-y-3 mb-16">
				<div className="text-center text-[#63657b] text-[10px] font-bold font-sans uppercase leading-[18px] tracking-[3.20px]">
					scroll to discovery
				</div>
				<img src={scrollIcon} width={21} height={36} />
			</div>

			{/* Who we are */}
			<div className="px-[216px] py-24 bg-[#f2f4f6] flex flex-col items-center">
				<div className="justify-start items-center gap-2 inline-flex">
					<div className="text-center text-[#1f212e] text-6xl font-extrabold font-sans capitalize leading-[90px] tracking-wide">
						who
					</div>
					<div className="text-center bg-gradient-to-r from-[#FFA755] to-[#EB212D] text-transparent bg-clip-text text-6xl font-extrabold font-sans capitalize leading-[90px]">
						we are?
					</div>
				</div>
				<div className="w-[1008px] text-center text-[#63657b] text-base font-normal font-mono leading-7 mb-8">
					We are a team of 2D/3D Artists, Game Designers, and Immersive
					Experience Developers from Vietnam, who are passionate to build a game
					distribution platform that supports integration of NFT games, xR
					technology and related products.
				</div>
				<div className="relative">
					<img src={bgLogo} alt="Background" />
					<img
						src={logo}
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						alt="Logo"
					/>
				</div>
				<div className="w-[1008px] text-center">
					<span className="text-[#1f212e] text-[40px] font-extrabold font-['Plus Jakarta Sans'] leading-[60px]">
						We are inheriting{' '}
					</span>
					<span className="text-[#e04834] text-[40px] font-extrabold font-['Plus Jakarta Sans'] leading-[60px]">
						the values and influences{' '}
					</span>
					<span className="text-[#20212f] text-[40px] font-extrabold font-['Plus Jakarta Sans'] leading-[60px]">
						previously{' '}
					</span>
					<span className="text-[#1f212e] text-[40px] font-extrabold font-['Plus Jakarta Sans'] leading-[60px]">
						built at FPT, and aim to develop and bring our products to the
						world.
					</span>
				</div>
			</div>

			{/* Our feature */}
			<div className="mt-[100px] px-28 flex flex-col items-center mb-32">
				<div className="justify-start items-center gap-2 inline-flex">
					<div className="text-center text-[#1f212e] text-6xl font-extrabold font-sans capitalize leading-[90px] tracking-wide">
						Our
					</div>
					<div className="text-center bg-gradient-to-r from-[#FFA755] to-[#EB212D] text-transparent bg-clip-text text-6xl font-extrabold font-sans capitalize leading-[90px]">
						Features
					</div>
				</div>
				<div className="text-center text-[#63657b] text-base font-normal font-mono leading-7 mb-[60px]">
					We are inheriting the values and influences previously built at FPT,
					and aim to develop
					<br />
					and bring our products to the world.
				</div>
				<div className="flex flex-wrap gap-x-8 gap-y-8 mb-10">
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

			{/* MVP product */}
		</div>
	);
}
