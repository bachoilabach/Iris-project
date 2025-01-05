import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
