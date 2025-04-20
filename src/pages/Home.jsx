import React from 'react'
import Hero from '../components/home/Hero'
import Sponsors from '../components/home/Sponsors'
import LookingToBuy from '../components/home/LookingToBuy'
import WelcomeSection from '../components/home/WelcomeSection'
import TrustSection from '../components/home/TrustSection'
import FeaturedCars from '../components/home/FeaturedCars'
import TestimonialCarousel from '../components/home/TestimonialCarousel'
import NewsLetterSignup from '../components/home/NewsLetterSignup'

const Home = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <LookingToBuy />
      <WelcomeSection />
      <TrustSection />
      <FeaturedCars />
      <TestimonialCarousel />
      <NewsLetterSignup />
    </>
  )
}

export default Home