import React from 'react'
import ServiceOption from '../feature/ServiceOption'
import AboutSurgeon from '../feature/AboutSurgeon'
import AboutDoctor from '../feature/AboutDoctor'
import AboutDisorder from '../feature/AboutDisorder'
import ProblemSlider from '../feature/ProblemSlider'
import Ms from '../feature/Ms'
import ContactUs from '../feature/ContactUs'
import banner from "../assests/img/banner.png"
import Layout from '../layOut/Layout'
function Home() {
  return (
  
    <Layout>
       <img src={banner} alt='' className='w-full'/>
      <ServiceOption/>
      <AboutSurgeon/>
      <AboutDoctor/>
      <AboutDisorder/>
      <ProblemSlider/>
      <Ms/>
      <ContactUs/>
    </Layout>
   
  )
}

export default Home
