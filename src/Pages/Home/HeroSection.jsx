import React from 'react'

export default function HeroSection() {
  return (
    <section id='heroSection' className='hero--section'>
        <div className='hero--section--content--box'>
          <div className='hero--section--content'>
            <p className='section--title'>Hi I am Mark Lester</p>
            <h1 className='hero--section--title'>
              <span className='hero--section--title--color'>Web</span>{" "} <br />
              Developer
            </h1>
              <p className='hero--section-description'>I bring a passion for creating dynamic and user-friendly websites through my proficiency in modern technologies and dedication to staying abreast of industry trends.</p>
          </div>
          <a href='https://drive.google.com/file/d/1atN9fZjvEbRPQfbP5DhqZtV63yk-Besa/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Resume</a>
        </div>
        <div className='hero--section--img'>
          <img src='./img/profile.png' alt='Hero Section'/>
        </div>
    </section>
  )
}
