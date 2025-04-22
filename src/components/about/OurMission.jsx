import React from 'react';
import { motion } from 'framer-motion';

const OurMission = () => {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<div className='mt-6 text-center'>
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					className='text-2xl md:text-3xl font-semibold mt-8 text-gray-800'>
					OUR MISSION
				</motion.h2>

				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className='origin-left mt-4 w-[10rem] lg:w-[15rem] mx-auto h-1 bg-primary rounded-full'
				/>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className='mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base'>
					To go beyond selling cars—by providing genuine service, educating
					buyers, and supporting our clients long after they drive off.
				</motion.p>
			</div>
		</section>
	);
};

export default OurMission;
