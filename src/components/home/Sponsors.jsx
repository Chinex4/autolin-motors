// src/components/Sponsors.jsx
import audi from '../../assets/images/sp1.png';
import vw from '../../assets/images/sp2.png';
import ford from '../../assets/images/sp3.png';
import mercedes from '../../assets/images/sp4.png';
import peugeot from '../../assets/images/sp5.png';
import bmw from '../../assets/images/sp6.png';
import bmw2 from '../../assets/images/sp7.png';

const sponsors = [audi, vw, ford, mercedes, peugeot, bmw, ford, bmw2];

const Sponsors = () => {
	const loopedSponsors = [...sponsors, ...sponsors]; // Duplicate for seamless loop

	return (
		<div className='py-4 bg-white max-w-7xl mx-auto border-t border-b border-neutral/20 mt-20 px-4 lg:px-[10.2rem] overflow-hidden'>
			<div className='marquee-sponsor'>
				<div className='marquee-track-sponsor'>
					{loopedSponsors.map((logo, index) => (
						<div
							key={index}
							className='flex justify-center items-center flex-shrink-0 mx-6 w-[120px]'>
							<img
								src={logo}
								alt={`Sponsor ${index}`}
								className='w-full h-auto object-contain'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
