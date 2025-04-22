import React, { useEffect } from 'react';
import HeroSection from '../components/about/HeroSection';
import OurMission from '../components/about/OurMission';
import Map from '../components/about/Map';
import TrustSection from '../components/home/TrustSection';

const About = () => {
	useEffect(() => {
		document.title = 'About Us | Autolin Motors';
	}, []);
	return (
		<>
			<HeroSection />
			<OurMission />
			<TrustSection title='OUR CORE VALUES' />
			<Map />
		</>
	);
};

export default About;
