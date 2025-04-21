import { useParams } from 'react-router-dom';
import { cars } from '../utils/data';
import CarDetailsSection from '../components/cardetails/CarDetailsSection';
import FeaturedCars from '../components/home/FeaturedCars';
import NewsletterSignup from '../components/home/NewsLetterSignup';
import TestimonialCarousel from '../components/home/TestimonialCarousel';

const CarDetails = () => {
	const { id } = useParams();
	const car = cars.find((c) => c.id === id);

	if (!car) return <div className='text-center mt-20'>Car not found</div>;

	return (
		<>
			<CarDetailsSection car={car} />
            <FeaturedCars />
            <TestimonialCarousel />
			<NewsletterSignup />
		</>
	);
};

export default CarDetails;
