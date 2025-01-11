import TitleAndDescription from '../../components/TitleAndDescription';
import bgLogo from '/public/bg_logo.svg';
import logo from '/public/logo.svg';
export default function WhoWeAre() {
	return (
		<>
			{/* Who we are */}
			<div className="xl:px-[216px] lg:px-20 md:py-24 px-6 py-20 bg-[#f2f4f6] flex flex-col items-center">
				<TitleAndDescription
					title={'Who'}
					titleGradient={'we are?'}
					description={`We are a team of 2D/3D Artists, Game Designers, and Immersive
					Experience Developers from Vietnam, who are passionate to build a game
					distribution platform that supports integration of NFT games, xR
					technology and related products.`}
				/>
				<div className="relative md:mt-0 my-16">
					<img
						src={bgLogo}
						alt="Background"
						width={1008}
						className="scale-150 md:scale-100"
					/>
					<img
						src={logo}
						alt="Logo"
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
					/>
				</div>
				<div className="text-center xl:text-[40px] md:text-[36px] text-2xl md:w-full sm:w-[400px]">
					<span className="text-[#1f212e]  font-extrabold font-sans md:leading-[60px] leading-[30px]">
						We are inheriting{' '}
					</span>
					<span className="text-[#e04834]  font-extrabold font-sans md:leading-[60px] leading-[30px]">
						the values and influences{' '}
					</span>
					<span className="text-[#20212f]  font-extrabold font-sans md:leading-[60px] leading-[30px]">
						previously{' '}
					</span>
					<span className="text-[#1f212e]  font-extrabold font-sans md:leading-[60px] leading-[30px]">
						built at FPT, and aim to develop and bring our products to the
						world.
					</span>
				</div>
			</div>
		</>
	);
}
