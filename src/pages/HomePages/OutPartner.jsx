import IconAutoScroll from '../../components/IconAutoScroll';
import TitleAndDescription from '../../components/TitleAndDescription';

export default function OutPartner() {
	return (
		<>
			<div className="sm:px-28 px-4 flex flex-col items-center ">
				<TitleAndDescription
					title={'Our'}
					titleGradient={'Partners'}
					description={`Our values shape the way we work with our clients, delivering outstanding user experience supported by cutting-edge technologies`}
				/>
			</div>
			<IconAutoScroll />
		</>
	);
}
