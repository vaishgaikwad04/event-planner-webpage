import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css'
import Packages from './components/Packages';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Packages/>
      <Gallery />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
