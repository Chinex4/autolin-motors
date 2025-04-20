// WhatsAppCTA.jsx
export default function HeroSection() {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<div className='relative h-[400px]'>
				<img
					src='/car-bg.jpeg' // Replace with your actual image path
					alt='background'
					className='absolute inset-0 w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4'>
					<h2 className='text-white text-2xl md:text-4xl font-[700] mb-6'>
						Your One-Stop Car <br className="hidden md:block"/> Dealership in Lagos
					</h2>
					<p className="mt-5 text-white/80 lg:w-[25rem]">
						At AUTOLIN Motors, we understand that buying a car in Lagos can be
						stressful. That’s why we’ve created a seamless, transparent process
						to help you feel confident at every step.
					</p>
					<div className='h-1 w-72 bg-white rounded-full absolute bottom-5' />
				</div>
			</div>
		</section>
	);
}
