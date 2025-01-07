/* eslint-disable react/prop-types */
export default function TitleAndDescription({
	title,
	titleGradient,
	description,
}) {
	return (
		<>
			<div className="justify-start items-center gap-2 inline-flex">
				<div className="text-center text-[#1f212e] text-6xl font-extrabold font-sans capitalize leading-[90px] tracking-wide">
					{title}
				</div>
				<div className="text-center bg-gradient-to-l from-[#FFA755] to-[#EB212D] text-transparent bg-clip-text text-6xl font-extrabold font-sans capitalize leading-[90px]">
					{titleGradient}
				</div>
			</div>
			<div className="w-[1008px] text-center text-[#63657b] text-base font-normal font-mono leading-7 mb-8">
				{description}
			</div>
		</>
	);
}
