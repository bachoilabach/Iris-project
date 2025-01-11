import BackerAdvisorCard from '../../components/BackerAdvisorCard';
import IntroduceCompanyCard from '../../components/IntroduceCompanyCard';
import TitleAndDescription from '../../components/TitleAndDescription';
import { listBacker } from '../../json/listBacker';

const BackerAnhAdvisors = () => {
	return (
		<>
			<div className="mt-[80px] xl:px-28 sm:px-20 px-4 py-[100px] flex flex-col items-center bg-[#F2F3F4]">
				<TitleAndDescription
					title={'Backers &'}
					titleGradient={'Advisors'}
					description={`We design and develop web and mobile applications for our clientsworldwide, focusing on outstanding user experience.`}
				/>
				<div className="my-[60px] flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full">
					{listBacker.map((per, index) => (
						<BackerAdvisorCard
							key={index}
							name={per.name}
							img={per.img}
							position={per.position}
							className={`${
								index === 1 ? 'order-1' : index === 0 ? 'order-2' : 'order-3'
							} md:order-none`}
						/>
					))}
				</div>

				<IntroduceCompanyCard />
			</div>
		</>
	);
};

export default BackerAnhAdvisors;
