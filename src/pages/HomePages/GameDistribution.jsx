import ButtonContact from '../../components/ButtonContact';
import mockup from '/public/assets/mockup.png';
import Rectangle from '/public/assets/Rectangle.png';
import scrollIcon from '/public/icons/scroll.svg';

export default function GameDistribution() {
	return (
		<>
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
						loading='lazy'
					/>
					{/* Hình vuông nằm dưới */}
					<img
						src={Rectangle}
						alt="Decorative Rectangle"
						width={337}
						height={351}
						className="absolute bottom-[30px] right-[-110px] z-0 rotate-[60deg] blur-[50px]"
						loading='lazy'
					/>
				</div>
			</div>
			<div className="flex flex-col items-center space-y-3 mb-16">
				<div className="text-center text-[#63657b] text-[10px] font-bold font-sans uppercase leading-[18px] tracking-[3.20px]">
					scroll to discovery
				</div>
				<img src={scrollIcon} width={21} height={36} loading='lazy'/>
			</div>
		</>
	);
}
