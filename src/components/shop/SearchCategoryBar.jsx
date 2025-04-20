// SearchCategoryBar.jsx
import { SlOptionsVertical } from 'react-icons/sl';

export default function SearchCategoryBar() {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<div className='max-w-6xl flex flex-col md:flex-row gap-4'>
				<div className='flex items-center border border-gray-300 px-4 py-2 rounded-md w-full'>
					<input
						type='text'
						placeholder='Search any car'
						className='w-full outline-none'
					/>
					<SlOptionsVertical className='text-gray-400 ml-2' />
				</div>
				<button className='bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-primary/80 transition'>
					Choose Category
				</button>
			</div>
		</section>
	);
}
