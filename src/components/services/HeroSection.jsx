import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: (custom) => ({
			opacity: 1,
			y: 0,
			transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' },
		}),
	};

	return (
		<section
			className='mb-20 px-4 lg:px-[10.2rem]'
			ref={ref}>
			<div className='relative h-[400px] overflow-hidden rounded-2xl shadow-lg'>
				<motion.img
					initial={{ scale: 1.1 }}
					animate={isInView ? { scale: 1 } : { scale: 1.1 }}
					transition={{ duration: 1.2, ease: 'easeOut' }}
					src='/car-bg.jpeg'
					alt='background'
					className='absolute inset-0 w-full h-full object-cover'
				/>

				<motion.div
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4'>
					<motion.h2
						variants={fadeIn}
						custom={0}
						className='text-white text-2xl md:text-4xl font-[700] mb-6'>
						Your One-Stop Car <br className='hidden md:block' /> Dealership in
						Lagos
					</motion.h2>

					<motion.p
						variants={fadeIn}
						custom={1}
						className='mt-5 text-white/80 lg:w-[25rem]'>
						At AUTOLIN Motors, we understand that buying a car in Lagos can be
						stressful. That’s why we’ve created a seamless, transparent process
						to help you feel confident at every step.
					</motion.p>

					<motion.div
						variants={fadeIn}
						custom={2}
						className='h-1 w-72 bg-white rounded-full absolute bottom-5'
					/>
				</motion.div>
			</div>
		</section>
	);
}
