import React from 'react';
import HeroSection from '../components/services/HeroSection';
import Servicess from '../components/services/Servicess';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import NewsLetterSignup from '../components/home/NewsLetterSignup';

const Services = () => {
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
