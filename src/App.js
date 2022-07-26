import React from 'react';

import './style.css';
import Home from './home';
import { Route, Link, Routes } from 'react-router-dom';
function App() {
  return (
    
    
   <div  className="">
     <Routes><Route path="/" element={<Home />} /></Routes>
     <Link to="/home">Home</Link>
   </div>
    
  );
}

export default App;
