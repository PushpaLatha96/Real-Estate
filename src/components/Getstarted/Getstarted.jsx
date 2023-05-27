import React, { useEffect } from 'react'
import "./Getstarted.css"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Getstarted = () => {
  useEffect(()=>{
    AOS.init({duration : 2000})
}, [])
  return (
    <section className='g-wrapper' id='Getstarted' data-aos="zoom-in">
        <div className="paddings innrWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started With Homyz</span>
                <span className='SecondaryText'>Subscribe and find super attractive price quotes from us <br/>
                Find your residence soon</span>
                <button className="button">
                  <a href="pushpanpl1411@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Getstarted
