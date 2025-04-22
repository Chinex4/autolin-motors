import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTASection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const fadeUp = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	return (
		<section
			className='mb-20 px-4 lg:px-[10.2rem]'
			ref={ref}>
			<div className='relative h-[400px]'>
				<img
					src='/car-bg.jpeg'
					alt='background'
					className='absolute inset-0 w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4'>
					<motion.h2
						variants={fadeUp}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						className='text-white text-2xl md:text-4xl font-bold mb-6'>
						CAN’T FIND WHAT <br className='hidden md:block' /> YOU LIKE? REACH
						OUT TO US
					</motion.h2>

					<motion.a
						variants={fadeUp}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						transition={{ delay: 0.2 }}
						href='https://wa.me/234xxxxxxxxxx'
						className='bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md font-semibold transition'>
						Send A Whatsapp Message
					</motion.a>

					<div className='h-1 w-72 bg-white rounded-full absolute bottom-5' />
				</div>
			</div>
		</section>
	);
}
