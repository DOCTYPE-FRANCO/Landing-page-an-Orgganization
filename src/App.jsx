import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Herosection from './components/Herosection';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/footer';

function App() {

  return (
    
      <div className='min-h-screen bg-white'>
        <Header/> 
        <div className='pt-32'>
          <Routes>
            <Route path="/" element={<Herosection />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>   
        </div> 
        <Footer />    
        
        
      </div>
    
  )
}


export default App
