import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const cardVariant = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const LookingToBuy = () => {
	return (
		<section className='mt-20 px-4 lg:px-[10.2rem]'>
			<div className='max-w-7xl mx-auto'>
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 gap-8'
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}>
					{/* Card 1 */}
					<motion.div
						className='relative bg-[#3e8ee9] text-white rounded-lg p-6 overflow-hidden'
						variants={cardVariant}>
						<div className='w-[80%] lg:w-[70%]'>
							<h3 className='text-2xl lg:text-3xl font-semibold mb-2'>
								Are You Looking For A Car?
							</h3>
							<p className='text-sm mb-4'>
								We are committed to providing our customers with exceptional
								service.
							</p>
						</div>
						<button className='bg-white mt-20 text-[#3e8ee9] flex items-center gap-1 text-sm font-medium px-4 py-3 rounded-md'>
							Get Started <FiExternalLink size={14} />
						</button>
						<div className='absolute bottom-4 -right-10 lg:right-4 opacity-70'>
							<img
								className='w-[70%] lg:w-full'
								src='/pattern1.png'
								alt=''
							/>
						</div>
					</motion.div>
	
					{/* Card 2 */}
					<motion.div
						className='relative bg-[#01b26b] text-white rounded-lg p-6 overflow-hidden'
						variants={cardVariant}>
						<div className='w-[80%] lg:w-[70%]'>
							<h3 className='text-2xl lg:text-3xl font-semibold mb-2'>
								Do You Want To Buy A Car?
							</h3>
							<p className='text-sm mb-4'>
								We are committed to providing our customers with exceptional
								service.
							</p>
						</div>
						<button className='bg-white mt-20 text-[#01b26b] flex items-center gap-1 text-sm font-medium px-4 py-3 rounded-md'>
							Get Started <FiExternalLink size={14} />
						</button>
						<div className='absolute bottom-4 -right-10 lg:right-4 opacity-70'>
							<img
								className='w-[70%] lg:w-full'
								src='/pattern22.png'
								alt=''
							/>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default LookingToBuy;
