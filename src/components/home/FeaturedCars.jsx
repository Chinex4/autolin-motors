import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFavourites } from '../../context/FavouritesContext';
import { useCarContext } from '../../context/CarContext'; // <--- Make sure this path is correct

const FeaturedCars = ({ title = 'FEATURED CARS' }) => {
	const navigate = useNavigate();
	const { toggleFavourite, isFavourite } = useFavourites();
	const { filteredCars } = useCarContext(); // <--- Use filteredCars from context

	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<h2 className='text-center text-2xl md:text-3xl font-semibold text-gray-800'>
				{title}
			</h2>
			<div className='mt-1 w-40 mx-auto lg:w-[10rem] h-1 mb-8 bg-primary rounded-full' />

			{filteredCars.length === 0 ? (
				<p className='text-center text-gray-500 mt-8'>
					No cars match your search.
				</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{filteredCars.map((car, index) => (
						<div
							key={index}
							className='bg-white rounded-xl shadow-md overflow-hidden relative'>
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
									<span className='font-bold text-gray-800'>{car.price}</span>
								</div>
								<div className='mt-2'>
									<p className='text-neutral text-sm'>{car.description}</p>
								</div>
								<ul className='flex flex-wrap gap-2 text-xs my-4'>
									{car.specs.map((spec, i) => (
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
						</div>
					))}
				</div>
			)}

			<div className='text-center mt-10'>
				<button className='border border-primary text-primary hover:bg-primary px-6 py-2 rounded-md text-sm font-medium'>
					View More
				</button>
			</div>
		</section>
	);
};

export default FeaturedCars;
