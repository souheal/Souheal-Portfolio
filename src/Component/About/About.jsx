import React from 'react'
import './About.css'
import MyPhoto from "../../Assests/myphoto.jpg"
import MyPhoto2 from "../../Assests/theme_pattern.svg"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={MyPhoto2} alt='Pattern' />
      </div>
      <div className='about-sections'>
        <div className='about-left pulse'>
          <img src={MyPhoto} alt='My Photo'/>
        </div>
        <div className='about-right'>
          <div className='about-para'>
          <p>I am an Information Technology student at Arab International University, specializing in web development. I am passionate and adaptable, with strong skills in React.js .<br></br><br></br>
           I have completed numerous projects focusing on responsive views and modern designs</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p> <hr style={{width:"80%"}}/></div>
            <div className='about-skill'><p>React Js</p> <hr style={{width:"70%"}}/></div>
            <div className='about-skill'><p>JavaScript</p> <hr style={{width:"60%"}}/></div>
            <div className='about-skill'><p>Python</p> <hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
      <div className='about-achivments'>
        <div className='about-achivment'>
          <h1>3+</h1>
          <p>Years of Experience</p>
        </div>
        <hr/>
        <div className='about-achivment'>
          <h1>20+</h1>
          <p>Projects Completed</p>
        </div>
        <hr/>
        <div className='about-achivment'>
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  )
}

export default About;
