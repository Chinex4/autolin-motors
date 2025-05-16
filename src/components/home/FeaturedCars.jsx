import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFavourites } from '../../context/FavouritesContext';
import { useCarContext } from '../../context/CarContext';
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';

const FeaturedCars = ({ title = 'FEATURED CARS' }) => {
	const navigate = useNavigate();
	const { toggleFavourite, isFavourite } = useFavourites();
	const { filteredCars, loading } = useCarContext();

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<ClipLoader
					color='#d90032'
					size={50}
				/>
			</div>
		);
	}

	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<div className='max-w-7xl mx-auto'>
				<motion.h2
					className='text-center text-2xl md:text-3xl font-semibold text-gray-800'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.7 }}>
					{title}
				</motion.h2>

				<motion.div
					className='mt-1 w-40 mx-auto lg:w-[10rem] h-1 mb-8 bg-primary rounded-full'
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.6 }}
					style={{ transformOrigin: 'left' }}
				/>

				{filteredCars.length === 0 && !loading ? (
					<motion.p
						className='text-center text-gray-500 mt-8'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						No cars match your search.
					</motion.p>
				) : (
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[200px]'>
						{loading ? (
							<div className='col-span-full flex justify-center items-center h-40'>
								<ClipLoader
									color='#d90032'
									size={40}
								/>
							</div>
						) : (
							filteredCars.map((car, index) => (
								<motion.div
									key={index}
									className='bg-white rounded-xl shadow-md overflow-hidden relative'
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1, duration: 0.6 }}>
									<img
										src={car.image}
										alt={car.name}
										className='w-full h-48 object-cover'
									/>
									<button
										onClick={() => toggleFavourite(car)}
										className='absolute top-3 right-3 p-2 bg-white rounded-full shadow transition-colors'>
										<Heart
											className={`w-5 h-5 ${
												isFavourite(car.id)
													? 'text-red-500 fill-red-500'
													: 'text-gray-500'
											}`}
										/>
									</button>
									<div className='p-4'>
										<div className='flex justify-between items-center mb-2'>
											<h3 className='font-semibold text-gray-700'>
												{car.name} – {car.year}
											</h3>
											<span className='font-bold text-gray-800'>
												₦{car.price.toLocaleString()}
											</span>
										</div>
										<div className='mt-2'>
											<p className='text-neutral text-sm'>{car.description}</p>
										</div>
										<ul className='flex flex-wrap gap-2 text-xs my-4'>
											{Array.isArray(car.specs) &&
												car.specs.map((spec, i) => (
													<li
														key={i}
														className='px-2 py-1 rounded flex flex-col items-center gap-2'>
														<img
															src={spec.icon}
															className='size-3'
															alt=''
														/>
														<span>{spec.text}</span>
													</li>
												))}
										</ul>
										<button
											onClick={() => navigate(`/car/${car.id}`)}
											className='w-full bg-primary text-white text-sm py-4 rounded hover:bg-primary'>
											View Details
										</button>
									</div>
								</motion.div>
							))
						)}
					</div>
				)}

				<motion.div
					className='text-center mt-10'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.6 }}>
					<button
						onClick={() => navigate('/shop')}
						className='border border-primary text-primary hover:bg-primary transition-all duration-300 hover:text-white px-6 py-2 rounded-md text-sm font-medium'>
						View More
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default FeaturedCars;
