import React from 'react';

const HeroSection = () => {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<div>
				<img
					src='/about-hero.png'
					alt=''
				/>
			</div>
			<div className='mt-6 text-center'>
				<h2 className='text-2xl md:text-3xl font-semibold mt-8 text-gray-800'>
					More Than a Car Dealer. <br className='hidden md:block' /> We’re Your
					Neighbours on the Road.
				</h2>
				<div className='mt-4 w-[20rem] lg:w-[25rem] mx-auto h-1 bg-primary rounded-full' />

				<p className='mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base'>
					At AUTOLIN Motors, we’re more than just a car dealership in
					Lagos—we’re a brand built on trust, transparency, and true service.
					Registered with the Corporate Affairs Commission (CAC), we’ve built
					our name by offering quality vehicles at fair prices to everyday
					Nigerians, first-time buyers, and growing families alike.
				</p>
			</div>
		</section>
	);
};

export default HeroSection;
