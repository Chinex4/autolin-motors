// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Services from './pages/Services';
// import NotFound from './pages/NotFound';

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<MainNavigation />}>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='shop'
					element={<Shop />}
				/>
				<Route
					path='services'
					element={<Services />}
				/>
				<Route
					path='about'
					element={<About />}
				/>
				{/* <Route
					path='*'
					element={<NotFound />}
				/> */}
			</Route>
		</Routes>
	);
}

export default App;
