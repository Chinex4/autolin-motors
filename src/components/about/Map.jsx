import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.8 }}>
				<img
					src='/map.png'
					alt='Map'
					className='mx-auto'
				/>
			</motion.div>
		</section>
	);
};

export default Map;
