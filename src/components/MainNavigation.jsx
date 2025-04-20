// src/components/MainNavigation.jsx
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainNavigation() {
	return (
		<div className='font-mont'>
			{/* Navbar */}
			<Navbar />
			{/* px-4 lg:px-[10.2rem] */}
			{/* Page Content */}
			<main className='min-h-screen mt-20 md:mt-24 font-mont'>
				<Outlet />
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}
