import React from 'react'
import { Link } from 'react-router-dom'

const Footeri = () => {
  return (
    <div className='motion'>
      <div className="foots">
             <div className="abrev">
              <h2>chukwuebuka nwakwue</h2>
             </div>
            
           <div className='port'>
     <Link to="/https://www.facebook.com/chuks.nwakwue"><i className="fa-brands fa-facebook"></i></Link>
     <Link to="/https://www.linkedin.com/in/chukwuebuka-nwakwue-73186025a"><i className=" fab fa-linkedin"></i></Link>
     {/* <Link to="/"><i className='fab fa-linkedin'> </i></Link> */}
     <Link to="/"><i className="fa-brands fa-whatsapp"></i></Link>
     <Link to="/https://twitter.com/chukwue4044289?t=volUhteRKAd_dSID0Rffog&s=08"><i className="fa-brands fa-twitter"></i></Link>

        </div>
        <div className="copy">
           Copyright &copy; 2022 - 2023. All rights reserved. 
           </div>
      </div>
    </div>
  )
}

export default Footeri
