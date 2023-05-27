import React, {  useEffect } from 'react'
import "./Companies.css"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Companies = () => {
  useEffect(()=>{
    AOS.init({duration : 2000})
}, [])
  return (
   <section className='c-wrappers'>
        <div className="paddings innerwidth flexCenter c-container" data-aos="zoom-in">
        <img src="./prologis.png" alt="" />
        <img src="./tower.png" alt="" />
        <img src="./equinix.png" alt="" />
        <img src="./realty.png" alt="" />
        </div>
   </section>
  )
}

export default Companies
