import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TrustSection = ({ title }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	return (
		<section
			className='mb-20 px-4 lg:px-[10.2rem]'
			ref={ref}>
			<motion.div
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				variants={{
					hidden: { opacity: 0, y: 50 },
					visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
				}}
				className='bg-red-50 py-10 px-4 lg:px-20 rounded-xl text-center max-w-5xl mx-auto'>
				<motion.h2
					className='text-xl md:text-2xl font-semibold text-gray-900 mb-8'
					variants={itemVariants}>
					{title}
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700'>
					{[
						{
							img: '/star-icon.png',
							text: 'Transparent, Trustworthy Service. No hidden charges. Just straight talk and fair deals.',
						},
						{
							img: '/money-icon.png',
							text: 'Affordable Cars, Verified Quality. Carefully selected cars for every budget.',
						},
						{
							img: '/users-icon.png',
							text: "Community - First Approach. You're not just a buyer, you're part of the AUTOLIN family.",
						},
					].map((item, idx) => (
						<motion.div
							key={idx}
							className='flex flex-col items-center gap-5'
							variants={itemVariants}
							transition={{ delay: idx * 0.2 }}>
							<img
								src={item.img}
								alt=''
								className='w-10 h-10'
							/>
							<p className='text-sm w-[15rem] lg:w-auto'>{item.text}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					className='mt-6 w-44 lg:w-[15rem] h-1 bg-primary mx-auto rounded-full'
					variants={itemVariants}
					transition={{ delay: 0.8 }}
				/>
			</motion.div>
		</section>
	);
};

export default TrustSection;
