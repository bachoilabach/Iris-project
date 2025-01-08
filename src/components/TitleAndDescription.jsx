/* eslint-disable react/prop-types */
export default function TitleAndDescription({
	title,
	titleGradient,
	description,
}) {
	return (
		<>
			<div className={`justify-start gap-2  ${title === 'Core' ? '' : 'inline-flex items-center '}`}>
				<div className={`text-[#1f212e] text-6xl font-extrabold font-sans capitalize leading-[90px] tracking-wide ${title === 'Core' ? '' : 'text-center '}`}>
					{title}
				</div>
				<div className={`${title === 'Core' ? '' : 'text-center '} bg-gradient-to-l from-[#FFA755] to-[#EB212D] text-transparent bg-clip-text text-6xl font-extrabold font-sans capitalize leading-[90px] `}>
					{titleGradient}
				</div>
			</div>
			<div className={`${title === 'Core' ? 'mt-2 w-[90%]' : 'text-center mb-8 w-[1008px]'}  text-[#63657b] text-base font-normal font-mono leading-7 `}>
				{description}
			</div>
		</>
	);
}
