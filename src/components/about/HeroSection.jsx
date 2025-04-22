import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<img src='/about-hero.png' alt='About Hero' />
			</motion.div>

			<div className='mt-6 text-center'>
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className='text-2xl md:text-3xl font-semibold mt-8 text-gray-800'
				>
					More Than a Car Dealer. <br className='hidden md:block' /> We’re Your
					Neighbours on the Road.
				</motion.h2>

				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className='origin-left mt-4 w-[20rem] lg:w-[25rem] mx-auto h-1 bg-primary rounded-full'
				/>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className='mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base'
				>
					At AUTOLIN Motors, we’re more than just a car dealership in
					Lagos—we’re a brand built on trust, transparency, and true service.
					Registered with the Corporate Affairs Commission (CAC), we’ve built
					our name by offering quality vehicles at fair prices to everyday
					Nigerians, first-time buyers, and growing families alike.
				</motion.p>
			</div>
		</section>
	);
};

export default HeroSection;
