import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCarContext } from '../../context/CarContext';
import SearchBar from './SearchBar';
import { motion } from 'framer-motion';

const Hero = () => {
	const navigate = useNavigate();
	const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } =
		useCarContext();

	return (
		<section className='font-mont bg-white overflow-hidden md:px-0 lg:px-0 lg:pl-[10.2rem]'>
			{/* Search Bar */}
			<div className='max-w-7xl mx-auto lg:mr-[10rem]'>
				<SearchBar />
			</div>

			<div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between relative'>
				{/* Left content */}
				<motion.div
					className='w-full lg:w-1/2 text-center lg:text-left z-10'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}>
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
					<motion.div
						className='mt-6'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, duration: 0.6 }}>
						<button
							onClick={() => navigate('/shop')}
							className='bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/80 transition'>
							Browse Our Cars &rarr;
						</button>
					</motion.div>
				</motion.div>

				{/* Right content - Car image */}
				<motion.div
					className='w-full lg:w-1/2 relative z-10'
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}>
					<img
						src={'/hero-car.png'}
						alt='Luxury Car'
						className='w-full lg:w-[900px] max-w-xl mx-auto lg:mx-0'
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
