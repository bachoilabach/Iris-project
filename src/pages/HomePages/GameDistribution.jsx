import ButtonContact from '../../components/ButtonContact';
import mockup from '/public/assets/mockup.png';
import Rectangle from '/public/assets/Rectangle.png';
import scrollIcon from '/public/icons/scroll.svg';

export default function GameDistribution() {
	return (
		<>
			{/* Game distribution */}
			<div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 bg-gradient-to-b from-[#FFF0EA] to-white xl:pt-36 md:pt-44 pt-28 mb-16">
				{/* Left */}
				<div className="flex flex-col justify-center items-center lg:items-start md:items-center text-center md:text-left -mt-6">
					<div className="flex-col justify-start items-start md:inline-flex hidden">
						<div className="text-[#1f212e] text-[44px] xl:text-[56px] font-black lg:font-extrabold font-sans xl:leading-[80px] leading-[64px] tracking-wide">
							Game Distribution
						</div>
						<div className="justify-start items-center gap-4 inline-flex">
							<div className="text-[#1f212e] text-[44px] xl:text-[56px] font-extrabold font-sans capitalize xl:leading-[80px] leading-[64px] tracking-wide">
								Platform supports{' '}
							</div>
						</div>
					</div>
					<div className="text-center text-[#1f212e] text-4xl font-black font-sans leading-[44px] tracking-tight md:hidden">
						Game Distribution
						<br/>
						Platform of
					</div>
					<div className="text-5xl sm:text-[60px] sm:text-start text-center xl:text-[80px] xl:leading-[100px] font-extrabold font-sans capitalize leading-[80px] tracking-wide bg-gradient-to-l from-[#FFA755] to-[#EB212D] text-transparent bg-clip-text xl:mb-10 sm:mb-5 ">
						NFT games
					</div>
					<ButtonContact />
				</div>

				{/* Right */}
				<div className="relative sm:mt-0 mt-11">
					<img
						src={mockup}
						alt="Game Distribution Mockup"
						className="relative bg-transparent aspect-auto z-40 xl:w-[538px] xl:h-[620px] w-[357px] h-[440px]"
						loading="lazy"
					/>

					<img
						src={Rectangle}
						alt="Decorative Rectangle"
						width={337}
						height={351}
						className="absolute bottom-[30px] right-[-110px] z-0 rotate-[60deg] blur-[50px]"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="flex flex-col items-center space-y-3 mb-16">
				<div className="text-center text-[#63657b] text-[10px] font-bold font-sans uppercase leading-[18px] tracking-[3.20px]">
					scroll to discovery
				</div>
				<img src={scrollIcon} width={21} height={36} loading="lazy" />
			</div>
		</>
	);
}
