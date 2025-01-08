import { useSelector } from 'react-redux';
// import { listIcon } from '../../json/listIcon';
import Marquee from 'react-fast-marquee';
import { iconSelector } from '../../store/selector';

const IconAutoScroll = () => {
	const listIcon = useSelector(iconSelector)

	return (
		<div className="overflow-hidden relative w-full">
			<div className="flex flex-col">
				{/* Nhân đôi danh sách icon */}
				<Marquee play>
					{listIcon.slice(0,listIcon.length/2).map((icon, index) => (
						<div
							className="flex justify-center items-center w-[280px] h-40"
							key={index}>
							<img
								className="object-contain"
								src={icon.src}
								alt={icon.alt}
								width={icon.width}
							/>
						</div>
					))}
				</Marquee>
				<Marquee play direction='right'>
					{listIcon.slice(listIcon.length/2,listIcon.length-1).map((icon, index) => (
						<div
							className="flex justify-center items-center w-[280px] h-40"
							key={index}>
							<img
								className="object-contain"
								src={icon.src}
								alt={icon.alt}
								width={icon.width}
							/>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	);
};

export default IconAutoScroll;
