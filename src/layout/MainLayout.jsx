import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
	return (
		<div>
			<Header />
			<main className='container mx-auto'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
