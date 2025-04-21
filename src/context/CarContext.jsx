import React, { createContext, useContext, useState } from 'react';
import { cars as allCars } from '../utils/data';

const CarContext = createContext();

export const CarProvider = ({ children }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
    

	const filteredCars = allCars.filter((car) => {
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
			}}>
			{children}
		</CarContext.Provider>
	);
};

export const useCarContext = () => useContext(CarContext);
