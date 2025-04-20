import React from 'react';
import CTASection from '../components/shop/CTASection';
import SearchCategoryBar from '../components/shop/SearchCategoryBar';
import FeaturedCars from '../components/home/FeaturedCars';
import TestimonialCarousel from '../components/home/TestimonialCarousel'
import NewsLetterSignup from '../components/home/NewsLetterSignup'

const Shop = () => {
	return (
		<>
			<CTASection />
			<SearchCategoryBar />
			<FeaturedCars />
			<FeaturedCars title='2025 CARS' />
			<FeaturedCars title='FAST CARS' />
			<TestimonialCarousel />
			<NewsLetterSignup />
		</>
	);
};

export default Shop;
