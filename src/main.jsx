import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { FavouritesProvider } from './context/FavouritesContext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<FavouritesProvider>
				<App />
			</FavouritesProvider>
			<ToastContainer
				position='top-right'
				autoClose={3000}
			/>
		</BrowserRouter>
	</StrictMode>
);
