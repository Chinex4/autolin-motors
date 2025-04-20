// src/components/Sponsors.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// import your images
import audi from '../../assets/images/sp1.png';
import vw from '../../assets/images/sp2.png';
import ford from '../../assets/images/sp3.png';
import mercedes from '../../assets/images/sp4.png';
import peugeot from '../../assets/images/sp5.png';
import bmw from '../../assets/images/sp6.png';
import bmw2 from '../../assets/images/sp7.png';

const sponsors = [audi, vw, ford, mercedes, peugeot, bmw, ford, bmw2,];

const Sponsors = () => {
	return (
		<div className='py-4 bg-white border-t border-b border-neutral/20 mt-20 px-4 lg:px-[10.2rem]'>
			<Swiper
				modules={[Autoplay]}
				autoplay={{ delay: 2000, disableOnInteraction: false }}
				loop={true}
				slidesPerView={4}
				breakpoints={{
					640: { slidesPerView: 4 },
					768: { slidesPerView: 5 },
					1024: { slidesPerView: 6 },
				}}
				spaceBetween={30}
				allowTouchMove={true}
				className='flex items-center'>
				{sponsors.map((logo, index) => (
					<SwiperSlide
						key={index}
						className='flex justify-center items-center'>
						<img
							src={logo}
							alt={`Sponsor ${index}`}
							className=''
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Sponsors;
