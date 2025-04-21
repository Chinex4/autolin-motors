import React from 'react';

const CarDetailsSection = ({ car }) => {
	return (
		<section className='pt-10 mb-20 px-4 lg:px-[10.2rem]'>
			<div className='grid md:grid-cols-2 gap-8'>
				<img
					src={car.image}
					alt={car.name}
					className='w-full h-auto rounded-xl shadow-md'
				/>

				<div>
					<h1 className='text-3xl font-bold text-gray-800'>
						{car.name} – {car.year}
					</h1>
					<p className='text-xl font-semibold text-primary mt-2'>{car.price}</p>
					<p className='mt-4 text-gray-600'>{car.description}</p>

					<ul className='flex flex-wrap gap-4 mt-6'>
						{car.specs.map((spec, i) => (
							<li
								key={i}
								className='flex items-center gap-2'>
								<img
									src={spec.icon}
									alt=''
									className='size-4'
								/>
								<span className='text-sm text-gray-700'>{spec.text}</span>
							</li>
						))}
					</ul>

					<button className='mt-8 bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition-all'>
						Book a Test Drive
					</button>
				</div>
			</div>
		</section>
	);
};

export default CarDetailsSection;
