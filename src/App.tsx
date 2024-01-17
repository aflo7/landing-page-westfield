// import { useState } from 'react'
import './App.css'
import { GiHamburgerMenu } from "react-icons/gi";


export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <nav>

<GiHamburgerMenu className='burger' size="2rem"/>
<h1>Westfield</h1>
<div className='login-wrapper'>Login</div>
     </nav>

     <main>
      <div>

      <h2>MyWestfield</h2>
      <p>Quick mockup page by Andres Flores.</p>
      <button className='sign-up-btn'>Sign up</button> 
      <p>Tech used: React, Typescript, HTML, CSS</p>
      <p className='learn-more-text'>Learn More</p>
      </div>
     </main>
     <div className='find-an-agent-wrapper'>
      <h2 className='find-an-agent-text'>Find an Agent</h2>
      <div className='find-an-agent-bottom-wrapper'>
        <input className='zip-code-input' type='text' placeholder='Enter Zip Code' />
        <button className='find-an-agent-button'>Find an agent</button>

      </div>
     </div>
    </>
  )
}
