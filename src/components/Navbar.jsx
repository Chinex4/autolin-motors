import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const drawerRef = useRef();

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Lock scroll when drawer is open
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'auto';
	}, [isOpen]);

	// Close drawer when clicking outside
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (drawerRef.current && !drawerRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isOpen]);

	const toggleMenu = () => setIsOpen(!isOpen);

	const navLinks = [
		{ name: 'HOME', path: '/' },
		{ name: 'SHOP', path: '/shop' },
		{ name: 'FAVOURITES', path: '/favourites' },
		{ name: 'SERVICES', path: '/services' },
		{ name: 'ABOUT US', path: '/about' },
	];

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'
			}`}>
			<div className='container mx-auto lg:px-[8rem] px-4 flex justify-between items-center py-4'>
				{/* Logo */}
				<Link
					to='/'
					className='text-xl font-bold'>
					<img
						src='/logo.png'
						alt='Autolin Logo'
						className='w-[120px] lg:w-[150px]'
					/>
				</Link>

				{/* Desktop Navigation */}
				<div className='hidden md:flex space-x-12 items-center'>
					{navLinks.map((link) => (
						<Link
							key={link.name}
							to={link.path}
							className={`relative text-darkBrown hover:text-primary ${
								location.pathname === link.path ? 'text-primary font-bold' : ''
							}`}>
							{link.name}
							{location.pathname === link.path && (
								<span className='absolute left-0 bottom-[-4px] w-[70%] h-[3px] rounded-xl bg-primary'></span>
							)}
						</Link>
					))}
				</div>

				{/* Contact Us Button (Desktop) */}
				<a
					href='mailto:autolinmotors@gmail.com'
					className='hidden lg:inline-block bg-primary text-white px-4 py-2 rounded-md font-semibold'>
					CONTACT US
				</a>

				{/* Hamburger Icon */}
				<button
					onClick={toggleMenu}
					className='md:hidden text-grayy text-2xl'>
					{isOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{/* Drawer Navigation */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Overlay */}
						<motion.div
							className='fixed inset-0 bg-black/40 z-40'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						/>

						{/* Drawer */}
						<motion.div
							ref={drawerRef}
							className='fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-md p-6'
							initial={{ x: '-100%' }}
							animate={{ x: 0 }}
							exit={{ x: '-100%' }}
							transition={{ type: 'tween' }}>
							<Link
								to='/'
								className='text-xl font-bold'>
								<img
									src='/logo.png'
									alt='Autolin Logo'
									className='w-[120px] lg:w-[150px]'
								/>
							</Link>

							<ul className='mt-6 flex flex-col space-y-6'>
								{navLinks.map((link) => (
									<li key={link.name}>
										<Link
											to={link.path}
											className={`block text-lg font-medium hover:text-primary ${
												location.pathname === link.path
													? 'text-primary font-bold'
													: 'text-gray-700'
											}`}
											onClick={() => setIsOpen(false)}>
											{link.name}
										</Link>
									</li>
								))}
								<li>
									<a
										href='mailto:autolinmotors@gmail.com'
										className='bg-primary text-white px-4 py-2 rounded-md font-semibold inline-block'
										onClick={() => setIsOpen(false)}>
										CONTACT US
									</a>
								</li>
							</ul>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</nav>
	);
}
