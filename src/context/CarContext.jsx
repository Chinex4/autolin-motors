import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import toast from 'react-hot-toast';

const CarContext = createContext();

export const CarProvider = ({ children }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCars = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'products'));
				const carList = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setCars(carList);
				// console.log(carList)
				setLoading(false);
				// toast.success('Car data loaded successfully');
			} catch (error) {
				console.error('Error fetching car data:', error);
				toast.error('Failed to load car data');
				setLoading(false);
			}
		};

		fetchCars();
	}, []);

	const filteredCars = cars.filter((car) => {
		const matchesSearch = car.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const matchesCategory = selectedCategory
			? car.category === selectedCategory
			: true;
		return matchesSearch && matchesCategory;
	});

	return (
		<CarContext.Provider
			value={{
				searchQuery,
				setSearchQuery,
				selectedCategory,
				setSelectedCategory,
				filteredCars,
				loading,
			}}>
			{children}
		</CarContext.Provider>
	);
};

export const useCarContext = () => useContext(CarContext);
