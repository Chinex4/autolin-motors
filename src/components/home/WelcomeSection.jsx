import React from 'react';

const WelcomeSection = () => {
	return (
		<section className='my-20 px-4 lg:px-[10.2rem]'>
			<div className='flex flex-col items-center text-center bg-white'>
				<div className='relative w-full max-w-xl'>
					<div className=''>
						<img
							src='/logo-mockup.png' // Replace with actual image path
							alt='Autolin Motors Building'
							className='w-full h-auto object-cover'
						/>
					</div>
					{/* Optional-primaryent - for style similar to the image */}
				</div>

				<h2 className='text-2xl md:text-3xl font-semibold mt-8 text-gray-800'>
					WELCOME TO AUTOLIN MOTORS
				</h2>

				<p className='mt-4 max-w-2xl text-gray-600 leading-relaxed text-sm md:text-base'>
					Your trusted car dealership in Lagos, Nigeria. Whether you're
					searching for Tokunbo cars, Nigerian-used vehicles, or a first-time
					buyer deal, our goal is simple: help you find the perfect car at the
					best price while building a lasting relationship rooted in honesty and
					service.
				</p>

				<div className='mt-4 w-44 lg:w-[15rem] h-1 bg-primary rounded-full' />
			</div>
		</section>
	);
};

export default WelcomeSection;
