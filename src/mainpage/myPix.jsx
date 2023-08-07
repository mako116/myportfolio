import React from 'react'
import Ddata from './Cdata'
import image from '../image/imagi.jpg'

import './mainx.css'
import cv from "../cv/can this CV get me a quality job offers.pdf"
  // import { Link } from 'react-router-dom'
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
const MyPix = () => {
    
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // }
 
  return (
    <div>
      {Ddata.map((data, index)=>{
        return(
            <div className="product" key={index}>
            
            <h2>About Me</h2>

            <div className="container contain_me">
                <div className="img">
                <img src={image} alt='' />
                </div>
                
                <div className="h-text">
                <h4>{data.name}</h4>
                 <p>{data.para}</p>
                </div>
            </div>
            <div className='chip'>
            <a href={cv} download>
            <button >Download Cv</button>
            </a>
            </div>
            </div>
        )
      })}
     </div>
  )
}

export default MyPix
