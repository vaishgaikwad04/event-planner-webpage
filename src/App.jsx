import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
//import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar always visible */}

      <Routes>
        {/* Homepage showing all sections */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Services />
        
              <Gallery />
              <Contact />
              <Footer />
            </>
          } 
        />

        {/* Optional: separate routes if needed */}
        <Route path="/services" element={<Services />} />
       {/*} <Route path="/packages" element={<Packages />} />*/}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
