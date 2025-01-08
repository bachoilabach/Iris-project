import TitleAndDescription from '../../components/TitleAndDescription';
import RoadMapImage from '../../assets/road_map.png';
import QuantumWildlife from '/public/quantum_wildlife_nexus.svg';
import QuanTumModal from '../../components/QuanTumModal';
import rightArrow from '/public/icons/right-arrow.svg';
import leftArrow from '/public/icons/left-arrow.svg';

export default function OurRoadMap() {
	return (
		<>
			<div className="px-28 flex flex-col items-center ">
				<TitleAndDescription
					title="Our"
					titleGradient="Roadmaps"
					description={`Our values shape the way we work with our clients, delivering outstanding user experience supported by cutting-edge technologies`}
				/>
			</div>

			<div
				className="w-full h-[900px] bg-cover grid grid-cols-2 place-content-center pl-28 mb-[100px]"
				style={{ backgroundImage: `url(${RoadMapImage})` }}>
				<div className="flex-col justify-start items-center inline-flex ml-28 place-self-center">
					<img src={QuantumWildlife} className="mb-[-28px]" loading='lazy'/>
					<div className="px-4 py-3 bg-white rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] backdrop-blur-[10px] justify-center items-center inline-flex">
						<div className="text-center bg-gradient-to-l from-[#FFA755] to-[#EB212D] text-transparent bg-clip-text text-xs font-extrabold font-sans leading-none">
							Quantum Wildlife Nexus
						</div>
					</div>
				</div>
				<div className='gap-4 flex flex-col items-center'>
					<QuanTumModal />
					<div className='flex gap-2'>
						<div className='p-[10px] rounded-full bg-white'>
							<img src={leftArrow}/>
						</div>
						<div className='p-[10px] rounded-full bg-white'>
							<img src={rightArrow}/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
