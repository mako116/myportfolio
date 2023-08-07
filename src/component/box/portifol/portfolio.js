import React from 'react'
import Filter from './filter'
import './contain.css'
const Portfolio = () => {
  return (
    <div className='container'>
    <div className="text_awake">
    <div className="motionsd">
      <h3>My <span className='lighten'> Works </span> </h3>
      <p>Portfolio</p>
      </div>
      <Filter/>
    </div>
    
    </div>
  )
}

export default Portfolio
