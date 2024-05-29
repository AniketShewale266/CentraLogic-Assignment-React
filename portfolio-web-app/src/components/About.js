import React from 'react'
import about from '../images/about.png'

function About() {
  return (
    <>
        <section className='about'>
            <h2 className='section-text'>ABOUT</h2>

            <div className='about-section'>
                <div className='image-section'>
                    <img src={about}></img>
                </div>
                <div className='about-paragraph'>
                <p>
                Hello! I am Aniket Shewale, a passionate and dedicated frontend developer. I have a strong interest in creating interactive and responsive web applications. 
                Although I am a fresher, I have hands-on experience with HTML, CSS, JavaScript, and React through various projects and internships.
                </p>
                <p>
                I graduated with a degree in Information Technology from Savitribai Phule Pune University. My coursework and personal projects have helped me build a solid foundation in web development.
                I am always eager to learn new technologies and improve my skills. In my free time, I enjoy coding, reading tech blogs, and exploring new tools and frameworks.
                </p>
                <p>
                I am looking for opportunities to work in a dynamic environment where I can contribute and grow as a developer. Let's connect and build something amazing together!
                </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default About