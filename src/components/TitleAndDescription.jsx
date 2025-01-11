/* eslint-disable react/prop-types */
export default function TitleAndDescription({
	title,
	titleGradient,
	description,
}) {
	return (
		<>
			<div
				className={`justify-start   ${
					title === 'Core'
						? 'sm:flex-col flex sm:justify-normal justify-center'
						: 'inline-flex items-center gap-2'
				} ${titleGradient === 'Advisors' ? 'flex-col' : ''}`}>
				<div
					className={`text-[#1f212e]  font-extrabold font-sans capitalize xl:leading-[90px] sm:leading-[72px] leading-[60px] tracking-wide ${
						title === 'Core'
							? 'md:text-5xl xl:text-6xl text-[44px] '
							: 'text-center md:text-6xl text-5xl'
					}`}>
					{title}
				</div>
				<div
					className={`${
						title === 'Core'
							? 'xl:text-6xl lg:text-5xl text-[44px]'
							: 'text-center md:text-6xl text-5xl'
					} bg-gradient-to-l from-[#FFA755] to-[#EB212D] text-transparent bg-clip-text  font-extrabold font-sans capitalize xl:leading-[90px] sm:leading-[72px] leading-[60px]`}>
					{titleGradient}
				</div>
			</div>
			<div
				className={`${
					title === 'Core'
						? 'mt-2 w-[90%] sm:text-sm sm:text-start text-center sm:mx-0 mx-auto sm:px-0 px-2'
						: 'text-center mb-8 md:w-[1008px] xl:px-0 lg:px-20 w-full mt-2 text-base'
				} text-[#63657b] font-normal font-mono leading-7`}>
				{description}
			</div>
		</>
	);
}
