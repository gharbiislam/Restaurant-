import React from 'react'
import MainLayout from '../components/MainLayout'
import HeroSection from '../sections/HeroSection'
import Services from '../sections/Services'
import Features from '../sections/Features'
import About from '../sections/About'
import Testimonials from '../sections/Testimonials'
import Workflow from '../sections/Workflow'
import Pricing from '../sections/Pricing'

const Home = () => {
  return (
   <MainLayout className=''>
    <HeroSection></HeroSection>
    <Services></Services>
    <Workflow></Workflow>
    <Features></Features>
    <About></About>
    <Testimonials></Testimonials>
    <Pricing></Pricing>
   </MainLayout>
  )
}

export default Home