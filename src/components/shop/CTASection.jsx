// WhatsAppCTA.jsx
export default function CTASection() {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<div className='relative h-[400px]'>
				<img
					src='/car-bg.jpeg' // Replace with your actual image path
					alt='background'
					className='absolute inset-0 w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4'>
					<h2 className='text-white text-2xl md:text-4xl font-bold mb-6'>
						CAN’T FIND WHAT <br className='hidden md:block' /> YOU LIKE? REACH
						OUT TO US
					</h2>
					<a
						href='https://wa.me/234xxxxxxxxxx' // Replace with actual WhatsApp link
						className='bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md font-semibold transition'>
						Send A Whatsapp Message
					</a>
					<div className='h-1 w-72 bg-white rounded-full absolute bottom-5' />
				</div>
			</div>
		</section>
	);
}
