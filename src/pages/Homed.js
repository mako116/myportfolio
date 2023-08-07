import React from 'react';
import Bannner from '../BANNER/BANNER.js';
import Wmpty from '../component/aempty/Wmpty.js';
import Packed from '../component/box/Packed';
import AllPort from '../component/box/portifol/allPort';
import Footeri from '../component/footer/Footer.jsx';
    import MyPix from '../mainpage/myPix';
 import BLoglistef from '../Useffect/BLoglistef.js';
//  import Home from '../Useffect/Home';
import Navbar from '../Useffect/Navbar';
 

const Rome = () => {
     return (
        <div className='overflow'>
      <Navbar/>
      <BLoglistef/>
      <MyPix/>
      <Packed/>
      <AllPort/>
      <Bannner/>
      <Wmpty/>
      <Footeri/>
      {/* <Footer/> */}
       {/* <Slider/> */}
    </div>
    );
};

export default Rome;