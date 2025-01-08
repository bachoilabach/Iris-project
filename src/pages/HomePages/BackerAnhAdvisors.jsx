import BackerAdvisorCard from '../../components/BackerAdvisorCard';
import IntroduceCompanyCard from '../../components/IntroduceCompanyCard';
import TitleAndDescription from '../../components/TitleAndDescription';
import { listBacker } from '../../json/listBacker';

const BackerAnhAdvisors = () => {
	return (
		<>
			<div className="mt-[80px] px-28 py-[100px] flex flex-col items-center bg-[#F2F3F4]">
				<TitleAndDescription
					title={'Backers &'}
					titleGradient={'Advisors'}
					description={`We design and develop web and mobile applications for our clientsworldwide, focusing on outstanding user experience.`}
				/>
				<div className="my-[60px] flex gap-12 items-center">
					{listBacker.map((per, index) => (
						<BackerAdvisorCard
							key={index}
							name={per.name}
							img={per.img}
							position={per.position}
						/>
					))}
				</div>

				<IntroduceCompanyCard />
			</div>
		</>
	);
};

export default BackerAnhAdvisors;
