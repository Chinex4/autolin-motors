import React, { useEffect } from 'react'
import Hero from '../components/home/Hero'
import Sponsors from '../components/home/Sponsors'
import LookingToBuy from '../components/home/LookingToBuy'
import WelcomeSection from '../components/home/WelcomeSection'
import TrustSection from '../components/home/TrustSection'
import FeaturedCars from '../components/home/FeaturedCars'
import TestimonialCarousel from '../components/home/TestimonialCarousel'
import NewsLetterSignup from '../components/home/NewsLetterSignup'

const Home = () => {
  const trustTitle = <>
    WHY LAGOS DRIVERS <br className='lg:hidden' /> TRUST US
  </>
  useEffect(() => {
		document.title = 'Home | Autolin Motors';
	}, []);
  return (
    <>
      <Hero />
      <Sponsors />
      <LookingToBuy />
      <WelcomeSection />
      <TrustSection title={trustTitle} />
      <FeaturedCars />
      <TestimonialCarousel />
      <NewsLetterSignup />
    </>
  )
}

export default Home