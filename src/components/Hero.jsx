import React from 'react';
import '../StyleSheets/Hero.css';
import ParticlesBackground from './ParticleBackground';
import hand from '../Materials/hand-unscreen.gif';
import Typewriter from 'typewriter-effect';


function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
        <ParticlesBackground />
        <div className='sec-1'>

          <div className='hero-col'>
            <h1 className='heading'><span className='hi'>Hi ,</span> I'm  <span className='ahad'>Ahad</span></h1>
            <img src={hand} alt='' className='hand-gif' />
          </div>

          <div className='hero-col-2'>
            <p>I'm a &nbsp;</p>
            <span className='type-writer'>
              <Typewriter
                options={{
                  strings: [' Software Engineer', ' Back-End Developer', ' MERN Stack Developer', ' Front-End Developer'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </span>
          </div>
          <div className='hero-col-3'>
            <p className='hero-last-text'>I build dynamic web applications with the MERN stack, creating seamless and powerful user experiences</p>
          </div>

        </div>
        <div className='sec-2'>asdas</div>
      
      </div>
    </div>
  )
}

export default Hero