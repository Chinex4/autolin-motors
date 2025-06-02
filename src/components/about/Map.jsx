import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.8 }}
				className='aspect-w-16 aspect-h-9'>
				<iframe
					title='Google Map'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7016659295246!2d3.4853384999999997!3d6.4323558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5b49172e731%3A0x8a11722abc26c755!2sLekki%20Luxury%20Cars!5e0!3m2!1sen!2sng!4v1748896814509!5m2!1sen!2sng'
					width='100%'
					height='450'
					style={{ border: 0 }}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					className='w-full rounded-xl shadow-md'></iframe>
			</motion.div>
		</section>
	);
};

export default Map;


