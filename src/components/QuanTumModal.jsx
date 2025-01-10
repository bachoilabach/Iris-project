import QuanTumLogo from '/public/icons/quantum_logo.svg';
const contentOfModal = {
	titleModal: 'Quantum Wildlife Nexus',
	time: '(Q1-Q2/2024)',
	contentModal: [
		{
			rowTitle: {
				title: 'Region',
				titleBr: 'Representation',
			},
			rowContent:
				'This region combines the polished design features of Nova Desktop with natural elements from Animal Push Royale. The color scheme features natural earthy tones, blending navy blue, silver, gold, earthy brown, forest green, and subtle sky blue. The architectural design combines polished design elements with a natural ambiance.',
		},
		{
			rowTitle: {
				title: 'Main Milestion',
				titleBr: 'Name',
			},
			rowContent: 'Nova: MVP & Beta Version',
		},
		{
			rowTitle: {
				title: 'Main Milestrone 3D',
				titleBr: 'Representation',
			},
			rowContent: 'Rocket',
		},
		{
			rowTitle: {
				title: 'Main Milestone',
				titleBr: 'Pop-Up Content',
			},
			rowContent: 'Later (not defined yet)',
		},
		{
			rowTitle: {
				title: 'Main Milestone',
				titleBr: 'Reward',
			},
			rowContent: 'Main Milestion Name',
		},
		{
			rowTitle: {
				title: 'Sub Milestones',
				titleBr: 'Names + 3D Represensation',
			},
			rowContent:
				'Venture Capital & Investors and Game Partners Connection (handshake between financial investor and game controller)',
		},
	],
};

export default function QuanTumModal() {
	return (
		<>
			<div className="w-[488px] h-[584px] bg-white/90 rounded-3xl backdrop-blur-lg justify-start items-start gap-2.5 inline-flex py-8">
				<div className="grow shrink basis-0 h-[100%] flex-col justify-start items-start gap-[15px] inline-flex overflow-x-hidden custom-scrollbar px-8">
					<div className="self-stretch h-[170px] flex-col justify-start items-center gap-4 flex">
						<div className="w-20 h-20 relative">
							<div className="w-20 h-20 left-0 top-[2.67px] absolute">
								<img
									className="w-[66.69px] h-[65.09px] left-[6.65px] top-[7.47px] absolute"
									src={QuanTumLogo}
								/>
							</div>
						</div>

						<div className="self-stretch h-[74px] flex-col justify-center items-start flex">
							<div className="self-stretch text-[#1f212e] text-[32px] font-extrabold font-sans leading-[48px]">
								{contentOfModal.titleModal}
							</div>
							<div className="text-center text-[#63657b] text-base font-semibold font-mono leading-relaxed">
								{contentOfModal.time}
							</div>
						</div>
					</div>
					{contentOfModal.contentModal.map((ele, index) => (
						<div key={index}>
							<div className="self-stretch justify-start items-start gap-5 inline-flex ">
								<div className="w-[140px] text-[#1f212e] text-sm font-extrabold font-sans leading-snug">
									{ele.rowTitle.title}
									<br />
									{ele.rowTitle.titleBr}
								</div>
								<div className="grow shrink basis-0 text-right text-[#63657b] text-sm font-medium font-sans leading-snug">
									{ele.rowContent}
								</div>
							</div>
							{index < contentOfModal.contentModal.length - 1 && (
								<div className="w-full border border-[#e1e2ec]" />
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
