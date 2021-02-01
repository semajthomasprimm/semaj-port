import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import OtherWorks from './components/OtherWorks';
import Works from './components/Works';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Works />
      <OtherWorks />
      <Footer />
    </>
  );
}
export default App;