// src/components/Hero.jsx
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCarContext } from '../../context/CarContext';
import SearchBar from './SearchBar';
const Hero = () => {
	const navigate = useNavigate();
	const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } =
		useCarContext();
	return (
		<section className='font-mont bg-white overflow-hidden md:px-0 lg:px-0 lg:pl-[10.2rem]'>
			{/* Search Bar */}
			<SearchBar />
			<div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between relative'>
				{/* Left content */}
				<div className='w-full lg:w-1/2 text-center lg:text-left z-10'>
					{/* Headline */}
					<h1 className='text-3xl sm:text-5xl font-extrabold leading-tight text-gray-900'>
						<span className='text-black block'>DRIVE WITH TRUST</span>
						<span className='text-primary block'>RIDE WITH VALUE</span>
					</h1>

					{/* Subtext */}
					<p className='mt-4 text-gray-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0'>
						Affordable, reliable cars in Lagos. From a dealership you can count
						on.
					</p>

					{/* CTA Button */}
					<div className='mt-6'>
						<button
							onClick={() => navigate('/shop')}
							className='bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/80 transition'>
							Browse Our Cars &rarr;
						</button>
					</div>
				</div>

				{/* Right content - Car image */}
				<div className='w-full lg:w-1/2 relative z-10'>
					<img
						src={'/hero-car.png'}
						alt='Luxury Car'
						className='w-full lg:w-[900px] max-w-xl mx-auto lg:mx-0'
					/>
				</div>

				{/* Red Background Shape */}
				{/* <div className='hidden lg:block absolute right-0 top-0 h-full w-[55%] bg-primary -z-0 clip-shape' /> */}
			</div>
		</section>
	);
};

export default Hero;
