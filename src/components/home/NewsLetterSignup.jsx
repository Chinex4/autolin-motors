import { motion } from 'framer-motion';

const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	show: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
	}),
};

export default function NewsletterSignup() {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<motion.div
				className='bg-white text-center'
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}>
				<motion.h2
					className='text-xl md:text-2xl font-semibold mb-6'
					variants={fadeInUp}
					custom={0}>
					Be the first to know when new <br /> cars land in Lagos
				</motion.h2>

				<motion.form
					className='max-w-md mx-auto space-y-4'
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}>
					<motion.input
						type='text'
						placeholder='Full name'
						className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
						variants={fadeInUp}
						custom={1}
					/>
					<motion.input
						type='email'
						placeholder='Email address'
						className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
						variants={fadeInUp}
						custom={2}
					/>
					<motion.button
						type='submit'
						className='w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-primary/80 transition'
						variants={fadeInUp}
						custom={3}>
						Join Our Email List
					</motion.button>
				</motion.form>
			</motion.div>
		</section>
	);
}
