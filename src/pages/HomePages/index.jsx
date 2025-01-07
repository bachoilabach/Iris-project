import GameDistribution from './GameDistribution';
import OurFeature from './OurFeature';
import WhoWeAre from './WhoWeAre';
export default function HomePage() {
	return (
		<div className="overflow-x-hidden">
			<GameDistribution />

			<WhoWeAre />

			<OurFeature />

		</div>
	);
}
