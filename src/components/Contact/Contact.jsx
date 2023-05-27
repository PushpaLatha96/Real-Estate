import React, { useEffect } from 'react'
import "./Contact.css";
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Contact = () => {
    useEffect(()=>{
        AOS.init({duration : 2000})
    }, [])
  return (
    <div>
      <section className='c-wrapper' id='Contact'>
        <div className="paddings innerwidth flexCenter c-container">
            {/* left side */}
            <div className='flexColStart c-left'>
                <span className='orangeText'data-aos="fade-down">Our Contacts</span>
                <span className='primaryText' data-aos="fade-down">Easy to Contact us</span>
                <span className='SecondaryText' data-aos="fade-up">We always ready to help by providing the best service for you.
                We believe  a good blace for you to live can make your life better</span>
           
                <div className="flxColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                                <div className="flexCenter button">Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                                <div className="flexCenter button">Chat Now</div>
                        </div>

                    </div>
                    {/* Second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                                <div className="flexCenter button">Video Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                                <div className="flexCenter button">Message Now</div>
                        </div>

                    </div>
                </div>
           
            </div>
            {/* right side */}
            <div className="c-right">
                <div className="image-container" data-aos="zoom-out-left">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
