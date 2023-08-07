import { useState } from "react";
 import './navbar.css'
    const Navbar = () => {
    const[MobileMenu , setMobileMenu]=useState(false)

    window.addEventListener("scroll", ()=>{
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
      })
    return ( 
        <header className='search'>
       
            <h2>N</h2>
            <div>
            <button className='toggle' onClick={()=> setMobileMenu(!MobileMenu)}
            >
            {MobileMenu ? <i className='fa fa-times close home-btn'></i> :
              <i className='fa fa-bars open'></i>}
              </button>
            </div>
        </header>
     );
   }
    
   export default Navbar;