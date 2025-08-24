import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Herosection from './components/Herosection';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/footer';

function App() {

  return (
    
      <div className='min-h-screen bg-white'>
        <Header/> 
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/about" element={<About />} />
        </Routes>  
        <Footer />    
        
        
      </div>
    
  )
}


export default App
