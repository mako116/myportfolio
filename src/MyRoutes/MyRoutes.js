import React from 'react';
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom"
 import Rome from '../pages/Homed';
 
  

const MyRoutes = () => {
    return (
        <Router>
        <Routes>
              <Route path='/' exact element={<Rome/>}></Route>
             {/* <Route path='/bloglisted' exact element={<Bloglisted/>}></Route> */}
             
        </Routes>
            
        </Router>
    );
};

export default MyRoutes;