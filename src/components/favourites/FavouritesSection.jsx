import React from 'react';

const FavouritesSection = ({ favourites }) => {
	return (
		<section className='px-4 lg:px-[10.2rem] py-10'>
            <h2 className='text-center text-2xl md:text-3xl font-semibold text-gray-800 '>
                Your Favourite Cars
			</h2>

			{favourites.length === 0 ? (
				<p className='text-gray-600'>No cars added to favourites yet.</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{favourites.map((car) => (
						<div
							key={car.id}
							className='bg-white rounded-xl shadow-md overflow-hidden'>
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
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default FavouritesSection;
