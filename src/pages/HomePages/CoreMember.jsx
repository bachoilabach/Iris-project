import { useSelector } from 'react-redux';
import TitleAndDescription from '../../components/TitleAndDescription';
import { memberSelector } from '../../store/selector';
import MemberCard from '../../components/MemberCard';

const CoreMember = () => {
	const listMember = useSelector(memberSelector);
	return (
		<>
			<div className="mt-[120px] px-28 overflow-hidden grid grid-cols-3 gap-8">
				<div className="w-[384px]">
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
