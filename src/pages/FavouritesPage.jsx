import React, { useEffect } from 'react';
import { useFavourites } from '../context/FavouritesContext';
import { useNavigate } from 'react-router-dom';
import FavouritesSection from '../components/favourites/FavouritesSection';
import FeaturedCars from '../components/home/FeaturedCars';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import NewsletterSignup from '../components/home/NewsLetterSignup';

const FavouritesPage = () => {
	const { favourites } = useFavourites();
	const navigate = useNavigate();
	useEffect(() => {
		document.title = 'Favourites | Autolin Motors';
	}, []);

	return (
		<>
			<FavouritesSection favourites={favourites} />
			<FeaturedCars />
			<TestimonialCarousel />
			<NewsletterSignup />
		</>
	);
};

export default FavouritesPage;
