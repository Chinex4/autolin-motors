import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../lib/firebase'; // make sure you have this setup
import { doc, getDoc } from 'firebase/firestore';
import CarDetailsSection from '../components/cardetails/CarDetailsSection';
import FeaturedCars from '../components/home/FeaturedCars';
import NewsletterSignup from '../components/home/NewsLetterSignup';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import { ClipLoader } from 'react-spinners';

const CarDetails = () => {
	const { id } = useParams();
	const [car, setCar] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCar = async () => {
			try {
				const docRef = doc(db, 'products', id);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					const data = docSnap.data();
					setCar({ id: docSnap.id, ...data });
					document.title = `Car Details for ${data.name} | Autolin Motors`;
				} else {
					setError('Car not found');
				}
			} catch (err) {
				console.error('Error fetching car:', err);
				setError('Failed to fetch car details');
			} finally {
				setLoading(false);
			}
		};

		fetchCar();
	}, [id]);

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<ClipLoader
					color='#d90032'
					size={50}
				/>
			</div>
		);
	}

	if (error) {
		return <div className='text-center mt-20 text-red-500'>{error}</div>;
	}

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
