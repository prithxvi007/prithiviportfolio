import React from 'react'
import './index.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img
          src="https://i.postimg.cc/CxSy0FVB/IMG-20231225-002316-569.jpg"
          alt="dp"
          className="hero-image"
        />
        <div className="hero-section">
          <h1 className="animate-slide-up name">Hi, I'm Prithiviraj.K</h1>
          <h1 className="animate-slide-up-delay developer">
            Full Stack Web Developer.
          </h1>
          <p className="animate-slide-up-delay-2">
            I build exceptional and accessible digital experiences for the web.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
