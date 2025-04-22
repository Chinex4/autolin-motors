import React, { useEffect } from 'react';
import CTASection from '../components/shop/CTASection';
import SearchCategoryBar from '../components/shop/SearchCategoryBar';
import FeaturedCars from '../components/home/FeaturedCars';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import NewsLetterSignup from '../components/home/NewsLetterSignup';
import { useLocation } from 'react-router-dom';
import { useCarContext } from '../context/CarContext';

const Shop = () => {
	const { search } = useLocation();
	const query = new URLSearchParams(search).get('search') || '';
	const { setSearchQuery, filteredCars } = useCarContext();

	useEffect(() => {
		setSearchQuery(query); // Just update the context state
	}, [query, setSearchQuery]);

	const dynamicTitle = query
		? `Search Results for "${query}"`
		: 'FEATURED CARS';
	useEffect(() => {
		document.title = 'Shop | Autolin Motors';
	}, []);
	return (
		<>
			<CTASection />
			<SearchCategoryBar />
			<FeaturedCars title={dynamicTitle} />
			<FeaturedCars title='2025 CARS' />
			<FeaturedCars title='FAST CARS' />
			<TestimonialCarousel />
			<NewsLetterSignup />
		</>
	);
};

export default Shop;
