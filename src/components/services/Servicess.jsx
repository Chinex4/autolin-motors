import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '../../utils/data';

export default function Servicess() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.6,
				ease: 'easeOut',
			},
		}),
	};

	return (
		<section
			className='mb-20 px-4 lg:px-[10.2rem]'
			ref={ref}>
			<div className='text-center mb-8'>
				<h2 className='text-2xl font-bold tracking-wide uppercase'>
					Our Services
				</h2>
				<div className='w-24 h-1 bg-primary mx-auto mt-2'></div>
			</div>

			<div className='max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8'>
				{services.map((service, index) => (
					<motion.div
						key={index}
						variants={cardVariants}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						custom={index}
						className='bg-white shadow-md rounded overflow-hidden'>
						<img
							src={service.image}
							alt={service.title}
							className='w-full h-48 object-cover'
						/>
						<div className='p-4'>
							<h3 className='font-semibold text-sm uppercase mb-2'>
								{service.title}
							</h3>
							<p className='text-sm text-gray-700 mb-4'>
								{service.description}
							</p>
							<button className='text-white bg-primary px-4 py-2 text-xs font-semibold rounded hover:bg-red-700 mt-8'>
								REQUEST SERVICE
							</button>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
