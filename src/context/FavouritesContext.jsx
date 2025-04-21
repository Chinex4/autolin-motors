import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({ children }) => {
	const [favourites, setFavourites] = useState([]);

	const toggleFavourite = (car) => {
		const isFav = favourites.find((fav) => fav.id === car.id);

		if (isFav) {
			setFavourites(favourites.filter((fav) => fav.id !== car.id));
			toast.info('Removed from Favourites');
		} else {
			setFavourites([...favourites, car]);
			toast.success('Added to Favourites!');
		}
	};

	const isFavourite = (carId) => {
		return favourites.some((fav) => fav.id === carId);
	};

	return (
		<FavouritesContext.Provider
			value={{ favourites, toggleFavourite, isFavourite }}>
			{children}
		</FavouritesContext.Provider>
	);
};
