import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
				isScrolled ? 'backdrop-blur-md bg-white/50 shadow-md' : 'bg-transparent'
			}`}>
			<div className='container mx-auto lg:px-[8rem] px-4 flex justify-between items-center py-4'>
				{/* Logo */}
				<Link
					to='/'
					className='text-xl font-bold'>
					<img
						src='/logo.png'
						alt='Chutzpah Logo'
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

				{/* Contact Us */}
				<Link
					to='/contact'
					className='hidden lg:inline-block bg-primary text-white px-4 py-2 rounded-md'>
					CONTACT US
				</Link>

				{/* Hamburger Menu */}
				<button
					onClick={toggleMenu}
					className='md:hidden text-grayy text-2xl'>
					{isOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className='md:hidden bg-white shadow-lg'>
					<ul className='flex flex-col items-center space-y-4 py-4'>
						{navLinks.map((link) => (
							<li key={link.name}>
								<Link
									to={link.path}
									className={`text-gray-600 hover:text-primary ${
										location.pathname === link.path
											? 'text-primary font-bold'
											: ''
									}`}
									onClick={toggleMenu}>
									{link.name}
								</Link>
							</li>
						))}
						{/* Contact Us */}
						<Link
							to='/contact'
							className='hidden lg:inline-block bg-primary text-white px-4 py-2 rounded-md'>
							CONTACT US
						</Link>
					</ul>
				</div>
			)}
		</nav>
	);
}
