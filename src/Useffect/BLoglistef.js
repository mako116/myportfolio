import React from 'react'
import { Link } from 'react-router-dom'

const BLoglistef = () => {
  return (
    <div className="contentw">
     <div className="blog-preview">
    
    <h2>I'm</h2>
        <div className="animate-text">
        <span className="light-red">Chuks Nwakwue</span>
        <span className="light-red"> React DEVELOPER</span>
         <span className="light-red">Web DESIGNER</span>
        <span className="light-red">js DEVELOPER</span>
        
    </div>
        {/* <p>{blog.cover}</p> */}
        <p>I'm a Software Developer based in Lagos state, Nigeria. I build immersive and beautiful web through carefully crafted code and user-centric design.</p>
     <div className='gum'>
     <Link to="/https://www.facebook.com/chuks.nwakwue"><i className="fa-brands fa-facebook"></i></Link>
     <Link to="/https://www.linkedin.com/in/chukwuebuka-nwakwue-73186025a"><i className=" fab fa-linkedin"></i></Link>
     {/* <Link to="/"><i className='fab fa-linkedin'> </i></Link> */}
     <Link to="/"><i className="fa-brands fa-whatsapp"></i></Link>
     <Link to="/Nwakwue(@Chukwue40442489):https://twitter.com/chukwue40442489?t=M8ZlivumlY2LGl6pNNu-Aw&s=08"><i className="fa-brands fa-twitter"></i></Link>

        </div>
    </div>
    

 </div>
  )
}

export default BLoglistef
