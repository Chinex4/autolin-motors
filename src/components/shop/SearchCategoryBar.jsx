import { SlOptionsVertical } from 'react-icons/sl';
import { useCarContext } from '../../context/CarContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SearchCategoryBar() {
	const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } =
		useCarContext();

	const categories = ['SUV', 'Sedan', 'Truck', 'Coupe'];
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const fadeUp = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	return (
		<section
			className='mb-20 px-4 lg:px-[10.2rem]'
			ref={ref}>
			<motion.div
				className='max-w-6xl flex flex-col md:flex-row gap-4'
				variants={fadeUp}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}>
				<div className='flex items-center border border-gray-300 px-4 py-2 rounded-md w-full'>
					<input
						type='text'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder='Search any car'
						className='w-full outline-none'
					/>
					<SlOptionsVertical className='text-gray-400 ml-2' />
				</div>
				<select
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
					className='bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-primary/80 transition'>
					<option value=''>All Categories</option>
					{categories.map((cat) => (
						<option
							key={cat}
							value={cat}>
							{cat}
						</option>
					))}
				</select>
			</motion.div>
		</section>
	);
}
