// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';
import CarDetails from './pages/CarDetails';
import FavouritesPage from './pages/FavouritesPage';
// import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';
import MagazineModal from './components/MagazineModal';
import { useEffect, useState } from 'react';

function App() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setShowModal(true);
		}, 60000); // Show every 3 minutes

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const hasShown = sessionStorage.getItem('magazineModalShown');
		if (!hasShown) {
			setTimeout(() => {
				setShowModal(true);
				sessionStorage.setItem('magazineModalShown', 'true');
			}, 1000); // show after 1 second on first load
		}
	}, []);
	return (
		<>
			<Toaster
				position='top-right'
				toastOptions={{
					// Global default styles
					style: {
						background: '#fff',
						color: '#000',
						border: '1px solid #d90032',
						borderRadius: '8px',
						padding: '12px 16px',
					},
					success: {
						iconTheme: {
							primary: '#d90032',
							secondary: '#fff0f3',
						},
						style: {
							border: '1px solid #d90032',
							color: '#d90032',
						},
					},
					error: {
						iconTheme: {
							primary: '#d90032',
							secondary: '#fff0f3',
						},
						style: {
							border: '1px solid #d90032',
							color: '#d90032',
						},
					},
				}}
			/>
			<ScrollToTop />
			<Routes>
				<Route
					path='/'
					element={<MainNavigation />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='shop'
						element={<Shop />}
					/>
					<Route
						path='/car/:id'
						element={<CarDetails />}
					/>
					<Route
						path='services'
						element={<Services />}
					/>
					<Route
						path='about'
						element={<About />}
					/>
					<Route
						path='favourites'
						element={<FavouritesPage />}
					/>
					{/* <Route
						path='*'
						element={<NotFound />}
					/> */}
				</Route>
			</Routes>
			<MagazineModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
			/>
		</>
	);
}

export default App;
