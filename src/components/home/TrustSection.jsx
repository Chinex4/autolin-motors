import React from 'react';
// import { Star, DollarSign, Users } from 'lucide-react';

const TrustSection = ({ title }) => {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<div className='bg-red-50 py-10 px-4 lg:px-20 rounded-xl text-center max-w-5xl mx-auto'>
				<h2 className='text-xl md:text-2xl font-semibold text-gray-900 mb-8'>
					{title}
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700'>
					{/* Transparent Service */}
					<div className='flex flex-col items-center gap-5'>
						{/* <Star className='text-primary w-8 h-8 mb-2' /> */}
						<img
							src='/star-icon.png'
							alt=''
						/>
						<p className='text-sm w-[15rem] lg:w-auto'>
							Transparent, Trustworthy Service. No hidden charges. Just straight
							talk and fair deals.
						</p>
					</div>

					{/* Affordable Cars */}
					<div className='flex flex-col items-center gap-5'>
						{/* <DollarSign className='text-primary w-8 h-8 mb-2' /> */}
						<img
							src='/money-icon.png'
							alt=''
						/>
						<p className='text-sm w-[15rem] lg:w-auto'>
							Affordable Cars, Verified Quality. Carefully selected cars for
							every budget.
						</p>
					</div>

					{/* Community First */}
					<div className='flex flex-col items-center gap-5'>
						{/* <Users className='text-primary w-8 h-8 mb-2' /> */}
						<img
							src='/users-icon.png'
							alt=''
						/>
						<p className='text-sm w-[15rem] lg:w-auto'>
							Community - First Approach. You're not just a buyer, you're part
							of the AUTOLIN family.
						</p>
					</div>
				</div>

				<div className='mt-6 w-44 lg:w-[15rem] h-1 bg-primary mx-auto rounded-full' />
			</div>
		</section>
	);
};

export default TrustSection;
