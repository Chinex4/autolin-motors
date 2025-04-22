import React from 'react';
import { motion } from 'framer-motion';

const CarDetailsSection = ({ car }) => {
	return (
		<section className='pt-10 mb-20 px-4 lg:px-[10.2rem]'>
			<div className='grid md:grid-cols-2 gap-8'>
				<motion.img
					src={car.image}
					alt={car.name}
					className='w-full h-auto rounded-xl shadow-md'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
				/>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}>
					<h1 className='text-3xl font-bold text-gray-800'>
						{car.name} – {car.year}
					</h1>

					<motion.p
						className='text-xl font-semibold text-primary mt-2'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}>
						{car.price}
					</motion.p>

					<motion.p
						className='mt-4 text-gray-600'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, duration: 0.6 }}>
						{car.description}
					</motion.p>

					<motion.ul
						className='flex flex-wrap gap-4 mt-6'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4, duration: 0.6 }}>
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
					</motion.ul>

					<motion.button
						className='mt-8 bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition-all'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.6, duration: 0.6 }}>
						Book a Test Drive
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default CarDetailsSection;
