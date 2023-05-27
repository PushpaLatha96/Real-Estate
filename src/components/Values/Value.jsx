import React, {  useEffect } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css";
// import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from "../../utils/accordion";
import "./Value.css"
import { MdOutlineArrowDropDown } from 'react-icons/md';
import AOS from 'aos'
import 'aos/dist/aos.css'



const Value = () => {
        useEffect(()=>{
            AOS.init({duration : 2000})
        }, [])
  return (
    <section className='v-wrapper' id='Value'>
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container" data-aos="zoom-out-right">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText' data-aos="fade-up">Our Value</span>
                <span className='primaryText' data-aos="fade-up">Value We Give to You</span>
                <span className='secondaryText' data-aos="fade-up"> 
                WE  always ready to help by providing the best services for you.
                <br/>
                We believe a good blace to live can make your life better
                             </span>

                <Accordion className='accordion' 
                allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {data.map((item, i) => {
                        // const {className,setClassName} = useState(null)
                        return(
                            <AccordionItem className="accordionItem" key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton  className='flexCenter accordionButton'>
                                        {/* <AccordionItemState>
                                            {({ expanded }) =>
                                            expanded
                                            ? setClassName("expanded")
                                        : setClassName("collapsed")
                                        }
                                        </AccordionItemState> */}
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className='primaryText' data-aos="fade-right">
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText " data-aos="fade-left">{item.detail}</p>
                                    <p className="secondaryText " data-aos="fade-left">{item.detailOne}</p>

                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    </section>
    )
}

export default Value
