import React from 'react'
import HeroSection from '../HeroSection' 
import Skills from '../Skills'
import AboutMe from '../AboutMe'
import MyPortfolio from '../MyPortfolio'
import Contact from '../Contact'
import Footer from '../Footer'

export default function index() {
  return (
    <>
        <HeroSection />
        <Skills />
        <AboutMe />
        <MyPortfolio />
        <Contact />
        <Footer />
    </>
  )
}
