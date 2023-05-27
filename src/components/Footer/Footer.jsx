import React, { useEffect } from 'react'
import "./Footer.css"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
    useEffect(()=>{
        AOS.init({duration : 2000})
    }, [])
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container' data-aos="fade-left">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />
                <span className="secondaryText">
                    Our vision is to make all people <br/>
                    the best places to live for them.
                </span>
            </div>
            {/* right side */}
            <div className="flexColStart f-right" data-aos="fade-left">
                <span className="primaryText"  >Information</span>
                <span className="secondaryText" >145 New york, Fl 4571, USA</span>
                <div className="flexCenter f-menu" >
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Footer
