import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
	{
		name: 'Hannah Schmitt',
		role: 'Lead Designer',
		photo: '/lady-1.png',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		name: 'Hannah Schmitt',
		role: 'Lead Designer',
		photo: '/lady-2.png',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		name: 'Hannah Schmitt',
		role: 'Lead Designer',
		photo: '/lady-3.png',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		name: 'Hannah Schmitt',
		role: 'Lead Designer',
		photo: '/lady-3.png',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
];

export default function TestimonialCarousel() {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const [swiperReady, setSwiperReady] = useState(false);

	useEffect(() => {
		setSwiperReady(true); // Ensures swiper initializes after refs are available
	}, []);

	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-pink-50 py-12'>
					<h2 className='text-2xl font-semibold text-center mb-4'>
						What Our Clients Say <br className='lg:hidden' /> About Us
					</h2>
	
					{/* Navigation & Pagination */}
					<div className='mx-auto w-[8rem] flex justify-center items-center space-x-4 mb-8'>
						<button
							ref={prevRef}
							className='text-2xl hover:text-red-500'>
							<ChevronLeft />
						</button>
						<div
							id='custom-pagination'
							className='flex gap-2'
						/>
						<button
							ref={nextRef}
							className='text-2xl hover:text-red-500'>
							<ChevronRight />
						</button>
					</div>
	
					{swiperReady && (
						<Swiper
							modules={[Navigation, Pagination, Autoplay]}
							autoplay={{ delay: 3000, disableOnInteraction: false }}
							loop={true}
							centeredSlides={true}
							spaceBetween={30}
							slidesPerView={3}
							navigation={{
								prevEl: prevRef.current,
								nextEl: nextRef.current,
							}}
							pagination={{
								el: '#custom-pagination',
								clickable: true,
								renderBullet: (index, className) =>
									`<span class="${className} w-2 h-2 rounded-full bg-gray-300 inline-block mx-1 transition-all duration-300"></span>`,
							}}
							onBeforeInit={(swiper) => {
								swiper.params.navigation.prevEl = prevRef.current;
								swiper.params.navigation.nextEl = nextRef.current;
								swiper.params.pagination.el = '#custom-pagination';
							}}
							breakpoints={{
								0: { slidesPerView: 1 },
								768: { slidesPerView: 1.5 },
								1024: { slidesPerView: 3 },
							}}
							className='max-w-6xl mx-auto mt-4'>
							{testimonials.map((t, idx) => (
								<SwiperSlide key={idx}>
									{({ isActive }) => (
										<div
											className={`relative rounded-[2rem] p-6 pb-20 pt-20 transition-all duration-500 ${
												isActive
													? 'scale-95 lg:scale-105 z-20'
													: 'scale-90 opacity-80'
											}`}>
											<img
												src='/test-svg.svg'
												alt='shape'
												className='absolute bottom-0 left-0 w-full h-full object-cover -z-10'
											/>
											<div className='flex flex-col items-center text-center relative z-10'>
												<img
													src={t.photo}
													alt={t.name}
													className='w-16 h-16 rounded-full absolute -top-12 object-cover border-2 border-white'
												/>
												<h4 className='font-semibold mt-6'>{t.name}</h4>
												<p className='text-sm text-gray-500 mb-2'>{t.role}</p>
												<img
													className='size-6 mb-2'
													src='/quote-icon.png'
													alt='quote'
												/>
												<p className='text-[12px] text-gray-700'>{t.text}</p>
											</div>
										</div>
									)}
								</SwiperSlide>
							))}
						</Swiper>
					)}
				</div>
			</div>
		</section>
	);
}
