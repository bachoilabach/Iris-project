import TitleAndDescription from '../../components/TitleAndDescription';
import bgLogo from '/public/bg_logo.svg';
import logo from '/public/logo.svg';
export default function WhoWeAre() {
	return (
		<>
			{/* Who we are */}
			<div className="px-[216px] py-24 bg-[#f2f4f6] flex flex-col items-center">
				<TitleAndDescription
					title={'Who'}
					titleGradient={'we are?'}
					description={`We are a team of 2D/3D Artists, Game Designers, and Immersive
					Experience Developers from Vietnam, who are passionate to build a game
					distribution platform that supports integration of NFT games, xR
					technology and related products.`}
				/>
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
		</>
	);
}
