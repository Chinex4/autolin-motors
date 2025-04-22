import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

// Footer.jsx
export default function Footer() {
	return (
		<footer className='bg-white border-t border-neutral/20'>
			<div className='px-4 lg:px-[10.2rem]'>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-12 text-sm text-gray-700'>
					<div>
						<h4 className='font-semibold mb-4'>Company</h4>
						<ul className='space-y-2'>
							<li>About Us</li>
							<li>Blog</li>
							<li>Services</li>
							<li>FAQs</li>
							<li>Terms</li>
							<li>Contact Us</li>
						</ul>
					</div>
					<div>
						<h4 className='font-semibold mb-4'>Quick Links</h4>
						<ul className='space-y-2'>
							<li>Get in Touch</li>
							<li>Help Center</li>
							<li>Live Chat</li>
							<li>How it works</li>
						</ul>
					</div>
					<div>
						<h4 className='font-semibold mb-4'>Our Brands</h4>
						<ul className='space-y-2'>
							<li>Toyota</li>
							<li>Porsche</li>
							<li>Audi</li>
							<li>BMW</li>
							<li>Ford</li>
							<li>Nissan</li>
							<li>Peugeot</li>
							<li>Volkswagen</li>
						</ul>
					</div>
					<div>
						<h4 className='font-semibold mb-4'>Vehicles Type</h4>
						<ul className='space-y-2'>
							<li>Sedan</li>
							<li>Hatchback</li>
							<li>SUV</li>
							<li>Hybrid</li>
							<li>Electric</li>
							<li>Coupe</li>
							<li>Truck</li>
							<li>Convertible</li>
						</ul>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<h4 className='font-semibold mb-4'>Sale Hours</h4>
						<ul className='space-y-1'>
							<li>Monday – Friday: 09:00AM – 08:00 PM</li>
							<li>Saturday: 09:00AM – 07:00PM</li>
							<li>Sunday: Closed</li>
							<li className='mt-6'>Phone number: +2349051711633</li>
						</ul>

						<div className='mt-4'>
							<h4 className='font-semibold mb-2'>Connect With Us</h4>
							<div className='flex gap-4'>
								<a href='tel:+2349051711633'>
									<FaPhone size={20} />
								</a>
								<a href='https://x.com/autolinmotors?t=vdwhusFYRg0s-WJ7oPCicg&s=09'>
									<FaX size={20} />
								</a>
								<a href='https://www.instagram.com/autolinmotors/profilecard/?igsh=MXJ5aWF0MmY2MmhvYQ=='>
									<FaInstagram size={20} />
								</a>
								{/* <a href='#'>
									<FaLinkedin />
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-primary px-4 lg:px-[10.2rem]'>
				<div className=' text-white py-4 flex flex-col md:flex-row justify-between text-xs'>
					<p>&copy; 2024 example.com. All rights reserved.</p>
					<div className='flex space-x-4 mt-2 md:mt-0'>
						<a href='#'>Terms & Conditions</a>
						<a href='#'>Privacy Notice</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
