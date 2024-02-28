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
          <a href='path/to/your/resume.pdf' target='_blank' className='btn btn-primary'>Resume</a>
        </div>
        <div className='hero--section--img'>
          <img src='./img/profile.png' alt='Hero Section'/>
        </div>
    </section>
  )
}
