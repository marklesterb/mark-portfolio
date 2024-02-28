import React from 'react'

export default function Contact() {
  return (
    <section className='contact--section' id='ContactMe'>
      <div className='contact--container--box'>
        <p className='sub--title'>Get In Touch</p>
        <h2>Contact Me</h2>
        <p className='text-lg'>For any inquiries or collaboration opportunities, please feel free to reach out to me via the socials below.</p>
        <div className='social-icons'>
          <a href='mailto:marklesterb22@gmail.com' target='_blank' rel='noopener noreferrer'><img src="img/svg/gmail.svg" alt="svg" /></a>
          <a href='https://www.facebook.com/marklester.buenaventura.5' target='_blank' rel='noopener noreferrer'><img src="img/svg/facebook.svg" alt="svg" /></a>
          <a href='https://www.linkedin.com/in/mark-lester-buenaventura-42ab6624b/' target='_blank' rel='noopener noreferrer'><img src="img/svg/linkedIn.svg" alt="svg" /></a>
          <a href='https://profile.indeed.com/p/marklesterb-zddd1s0' target='_blank' rel='noopener noreferrer'><img src="img/svg/indeed.svg" alt="svg" /></a>
        </div>
      </div>
    </section>
  )
}
