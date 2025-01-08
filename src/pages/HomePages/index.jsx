import BackerAnhAdvisors from './BackerAnhAdvisors';
import CoreMember from './CoreMember';
import GameDistribution from './GameDistribution';
import OurFeature from './OurFeature';
import OurRoadMap from './OurRoadMap';
import OutPartner from './OutPartner';
import WhoWeAre from './WhoWeAre';
export default function HomePage() {
	return (
		<div className="overflow-x-hidden">
			<GameDistribution />

			<WhoWeAre />

			<OurFeature />

			<OurRoadMap />

			<OutPartner />

			<BackerAnhAdvisors />

			<CoreMember />
		</div>
	);
}
