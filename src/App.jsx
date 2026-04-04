import React from 'react'
import Navbar  from './components/Navbar';
import About from './components/About';
import Service  from './components/Service';
import Skills  from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
    return (
        <>
            <div className="app">
                <Navbar/>
                <About/>
                <Service/>
                <Skills/>
                <Projects/>
                <Testimonials/>
                <Pricing/>
                <Contact/>
                <Footer/>
            </div>
        </>
    );
}

export default App
