import React from 'react'

export default function AboutMe() {
  return (
    <section id='AboutMe' className='about--section'>
      <div className='about--section--img' >
        <img src='./img/profile.png' alt=''/>
      </div>
      <div className='hero--section--content--box about--section--box'>
        <div className='hero--section--content'>
          <p className='section--title'>About</p>
          <h1 className='skills--section--heading'>About Me</h1>
          <p className='hero--section--description'>As an aspiring Web developer, my objective is to secure a challenging entry level
            position where I can apply my passion for web development and showcase my
            proficiency in HTML, CSS, JavaScript, PHP, and MySQL. I am eager to contribute to
            a dynamic team that values creativity and innovation while fostering a collaborative
            work environment. Through my strong problem solving skills and attention to detail,
            I aim to craft visually appealing and user-centric websites that provide an
            exceptional user experience. I am committed to staying abreast of emerging
            technologies and industry trends to continuously enhance my skills and contribute
            to the growth of the organization. With a drive for excellence and a determination to
            learn.
          </p>
        </div>
      </div>
    </section>
  )
}
