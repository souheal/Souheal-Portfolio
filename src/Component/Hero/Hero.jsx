import React from 'react';
import Typewriter from 'typewriter-effect';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import MyPhoto from "../../Assests/myphoto.jpg";

const Hero = () => {
  return (
    <div id='home' className='Hero'>
      <img src={MyPhoto} alt='Photo' className="img-circle" />
      <h1>
        <span >I’m Souheal Mheash</span>,<Typewriter options={{strings: ["Web Developer","Mobile Developer","Freelance"],autoStart: true,loop: true,deleteSpeed: 50,}}/>
      </h1>
      <p>
      I craft high-performance digital experiences with creativity and technical expertise. With 3+ years of experience, I deliver impactful websites, versatile apps, and expert freelance support. Let's bring your vision to life.</p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' href='#contact'>Connect With me</AnchorLink>
        </div>
        <div className='hero-resume'>
          <a href='/Souheal-Mheash-CV.pdf' download='Souheal-Mheash-Resume.pdf'>My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
