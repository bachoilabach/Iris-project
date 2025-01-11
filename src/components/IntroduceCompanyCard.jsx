import FPTLogo from '../assets/backerAndAdvisor/FPTLogo.svg';
import AkaVLogo from '../assets/backerAndAdvisor/AkaVLogo.png';
import ArtBoard from '../assets/backerAndAdvisor/ArtBoard.png';
import RightArrow from '/public/icons/right-arrow.svg';
import { Link } from 'react-router-dom';
const IntroduceCompanyCard = () => {
	return (
		<div className="grid sm:grid-cols-2 grid-cols-1 gap-8 ">
			{/* FPT */}
			<Link
				to={''}
				className="xl:px-[60px] px-10 py-10 bg-[#fdfdfd] rounded-3xl flex-col justify-start items-start relative overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out sm:hover:scale-105">
				<img
					src={ArtBoard}
					className="xl:left-[367px] left-[300px]  top-[-28px] absolute opacity-20 h-full"
				/>
				<img src={FPTLogo} className="mb-8" />
				<div className="self-stretch gap-4">
					<div className="text-[#1f212e] text-base font-sans leading-relaxed">
						<span className="font-extrabold">
							Leading technology corporation
						</span>{' '}
						in Vietnam. Established on September 13, 1988, with IT and
						Telecommunications as its core business sectors, nearly{' '}
						<span className="font-extrabold">US $2 billion in revenue</span> and{' '}
						<span className="font-extrabold">35,000+ employees.</span>
					</div>
					<br />
					<span className="text-[#1f212e] text-base font-sans leading-relaxed">
						FPT has provided services to{' '}
						<span className="font-extrabold">
							63 provinces and cities in Vietnam
						</span>{' '}
						and{' '}
						<span className="font-extrabold">
							current present in 33 countries
						</span>
						. FPT has been serving over{' '}
						<span className="font-extrabold">600 B2B customers worldwide</span>,
						a hundred of which are in the{' '}
						<span className="font-extrabold">Fortune 500</span>.
					</span>
				</div>
				<img
					src={RightArrow}
					className="absolute bottom-5 right-5 rotate-45 w-10"
				/>
			</Link>

			{/* Aka Verse */}
			<Link
				to={''}
				className=" px-[60px] py-10 bg-[#fdfdfd] rounded-3xl flex-col justify-start items-start relative overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
				<img
					src={ArtBoard}
					className="xl:left-[367px] left-[300px]  top-[-28px] absolute opacity-20 h-full"
				/>
				<img src={AkaVLogo} className="mb-8 w-52 h-[80px]" />
				<div className="self-stretch gap-4">
					<div className="text-[#1f212e] text-base font-sans leading-relaxed">
						Developed by experts from FPT Software –{' '}
						<span className="font-extrabold">
							the global leading technology and IT services provider
						</span>
						,<span className="font-extrabold">akaVerse</span> is a comprehensive
						solution for the immersive technology.
					</div>
					<br />
					<div className="text-[#1f212e] text-base font-sans leading-relaxed">
						akaVerse offers ready-made solution packages and easily integrated
						products,{' '}
						<span className="font-extrabold">
							converging xR – mix reality, AR, VR, with next-gen technologies
						</span>
						. akaVerse creates better conversion for the business and
						<span className="font-extrabold">
							breakthrough innovations in the future.
						</span>
					</div>
				</div>
				<img
					src={RightArrow}
					className="absolute bottom-5 right-5 rotate-45 w-10"
				/>
			</Link>
		</div>
	);
};

export default IntroduceCompanyCard;
