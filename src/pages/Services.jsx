import React, { useEffect } from 'react';
import HeroSection from '../components/services/HeroSection';
import Servicess from '../components/services/Servicess';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import NewsLetterSignup from '../components/home/NewsLetterSignup';

const Services = () => {
	useEffect(() => {
		document.title = 'Our Services | Autolin Motors';
	}, []);
	return (
		<>
			<HeroSection />
			<Servicess />
			<TestimonialCarousel />
			<NewsLetterSignup />
		</>
	);
};

export default Services;
