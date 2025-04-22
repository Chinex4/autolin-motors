import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: { delay, duration: 0.6, ease: 'easeOut' },
	}),
};

const WelcomeSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	return (
		<section
			className='my-20 px-4 lg:px-[10.2rem]'
			ref={ref}>
			<motion.div
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				variants={fadeInUp}
				className='flex flex-col items-center text-center bg-white'>
				<motion.div
					className='relative w-full max-w-xl'
					variants={fadeInUp}>
					<img
						src='/logo-mockup.png'
						alt='Autolin Motors Building'
						className='w-full h-auto object-cover rounded-xl shadow-md'
					/>
				</motion.div>

				<motion.h2
					className='text-2xl md:text-3xl font-semibold mt-8 text-gray-800'
					variants={fadeInUp}>
					WELCOME TO AUTOLIN MOTORS
				</motion.h2>

				<motion.p
					className='mt-4 max-w-2xl text-gray-600 leading-relaxed text-sm md:text-base'
					variants={fadeInUp}>
					Your trusted car dealership in Lagos, Nigeria. Whether you're
					searching for Tokunbo cars, Nigerian-used vehicles, or a first-time
					buyer deal, our goal is simple: help you find the perfect car at the
					best price while building a lasting relationship rooted in honesty and
					service.
				</motion.p>

				<motion.div
					className='mt-4 w-44 lg:w-[15rem] h-1 bg-primary rounded-full'
					variants={fadeInUp}
				/>
			</motion.div>
		</section>
	);
};

export default WelcomeSection;
