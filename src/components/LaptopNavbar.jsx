import React from 'react'
import '../StyleSheets/LaptopNav.css'

function LaptopNavbar() {
  return (
    <nav className='laptop-nav'>
      <div className='nav-content-1'><p className='name-text'> &lt; 𝓐𝓫𝓭𝓾𝓵 𝓪𝓱𝓪𝓭  /&gt;</p></div>
      <div className='nav-content-2'>

        <li className="nav-elem">About</li>
        <li className="nav-elem">Work</li>
        <li className="nav-elem">Contact</li>
        <li><button className="button-78">Resume</button></li>

      </div>

    </nav >
  )
}

export default LaptopNavbar