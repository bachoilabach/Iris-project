import { useSelector } from 'react-redux';
import TitleAndDescription from '../../components/TitleAndDescription';
import { memberSelector } from '../../store/selector';
import MemberCard from '../../components/MemberCard';
import circle from '/public/assets/circle.png';
import triangle from '/public/assets/triangle.png';

const CoreMember = () => {
	const listMember = useSelector(memberSelector);
	return (
		<>
			<div className="sm:mt-[120px] mt-20 sm:px-28 px-4 overflow-hidden grid sm:grid-cols-3 xl:gap-8 gap-4 relative mb-28">
				<img
					src={circle}
					className="absolute aspect-square left-[-44px] top-36"
					width={135}
					height={135}
				/>
				<img
					src={triangle}
					className="absolute right-0 top-1/2"
					width={205}
					height={218}
				/>

				<div className="sm:mb-0 mb-[31px]">
					<TitleAndDescription
						title={'Core'}
						titleGradient={'Members'}
						description={
							'We design and develop web and mobile applications for our clientsworldwide, focusing on outstanding user experience.'
						}
					/>
				</div>

				{listMember.map((member, index) => (
					<MemberCard
						index={index}
						key={index}
						name={member.name}
						img={member.img}
						position={member.position}
						alt={member.alt}
					/>
				))}
			</div>
		</>
	);
};

export default CoreMember;
