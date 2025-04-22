import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FavouritesSection = ({ favourites }) => {
	const navigate = useNavigate();

	return (
		<section className='px-4 lg:px-[10.2rem] py-6'>
			<motion.h2
				className='text-center text-2xl md:text-3xl font-semibold text-gray-800'
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.7 }}>
				YOUR FAVOURITE CARS
			</motion.h2>

			<motion.div
				className='mt-1 w-40 mx-auto lg:w-[10rem] h-1 mb-8 bg-primary rounded-full'
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ delay: 0.2, duration: 0.6 }}
				style={{ transformOrigin: 'left' }}
			/>

			{favourites.length === 0 ? (
				<motion.p
					className='text-neutral text-center'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					No cars added to favourites yet.
				</motion.p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{favourites.map((car, index) => (
						<motion.div
							key={car.id}
							className='bg-white rounded-xl shadow-md overflow-hidden'
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}>
							<img
								src={car.image}
								alt={car.name}
								className='w-full h-48 object-cover'
							/>
							<div className='p-4'>
								<div className='flex justify-between items-center mb-2'>
									<h3 className='font-semibold text-gray-700'>
										{car.name} – {car.year}
									</h3>
									<span className='font-bold text-gray-800'>{car.price}</span>
								</div>
								<p className='text-neutral text-sm'>{car.description}</p>
								<button
									onClick={() => navigate(`/car/${car.id}`)}
									className='w-full mt-4 bg-primary text-white text-sm py-3 rounded hover:bg-opacity-90'>
									View Details
								</button>
							</div>
						</motion.div>
					))}
				</div>
			)}
		</section>
	);
};

export default FavouritesSection;
