import React from 'react';

const services = [
	{
		title: 'CAR SALES (TOKUNBO & NIGERIAN-USED CARS)',
		description:
			'Develop and implement tailored marketing strategies to target and engage your ideal audience effectively.',
		image: '/service-img.png',
	},
	{
		title: 'CAR SOURCING & IMPORT SERVICES',
		description:
			'Need a rare model or custom spec? We help clients import cars from the USA, UAE, and Europe.',
		image: '/service-img.png',
	},
	{
		title: 'CAR INSPECTION & VERIFICATION',
		description:
			'Every car sold is inspected, with history reports available for peace of mind.',
		image: '/service-img.png',
	},
	{
		title: 'BUY-BACK & TRADE-IN SERVICES',
		description:
			'Upgrade your ride by trading in your current vehicle. We offer fair market value.',
		image: '/service-img.png',
	},
	{
		title: 'BUY-BACK & TRADE-IN SERVICES',
		description:
			'Upgrade your ride by trading in your current vehicle. We offer fair market value.',
		image: '/service-img.png',
	},
	{
		title: 'BUY-BACK & TRADE-IN SERVICES',
		description:
			'Upgrade your ride by trading in your current vehicle. We offer fair market value.',
		image: '/service-img.png',
	},
	{
		title: 'BUY-BACK & TRADE-IN SERVICES',
		description:
			'Upgrade your ride by trading in your current vehicle. We offer fair market value.',
		image: '/service-img.png',
	},
	{
		title: 'BUY-BACK & TRADE-IN SERVICES',
		description:
			'Upgrade your ride by trading in your current vehicle. We offer fair market value.',
		image: '/service-img.png',
	},
];

export default function Servicess() {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<div className='text-center mb-8'>
				<h2 className='text-2xl font-bold tracking-wide uppercase'>
					Our Services
				</h2>
				<div className='w-24 h-1 bg-primary mx-auto mt-2'></div>
			</div>
			<div className='max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8'>
				{services.map((service, index) => (
					<div
						key={index}
						className='bg-white shadow-md rounded overflow-hidden'>
						<img
							src={service.image}
							alt={service.title}
							className='w-full h-48 object-cover'
						/>
						<div className='p-4'>
							<h3 className='font-semibold text-sm uppercase mb-2'>
								{service.title}
							</h3>
							<p className='text-sm text-gray-700 mb-4'>
								{service.description}
							</p>
							<button className='text-white bg-primary px-4 py-2 text-xs font-semibold rounded hover:bg-red-700 mt-8'>
								REQUEST SERVICE
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
