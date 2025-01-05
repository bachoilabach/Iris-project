export default function HomePage() {
	return (
		<div className="pt-20 px-28">
			<div className="mt-[91px] flex justify-between items-center">
				{/* Left */}

				<div className="h-[262px] flex-col justify-start items-start inline-flex">
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
					<div className="text-[80px] font-extrabold font-sans capitalize leading-[120px] tracking-wide bg-gradient-to-r from-[#FFA755] to-[#EB212D] text-transparent bg-clip-text">
						NFT games
					</div>
				</div>
			</div>
		</div>
	);
}
