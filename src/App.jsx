import './App.css';
import "./fonts.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React from 'react';


function App() {
    return (
        <div className="bg-[url('./images/moroccan-flower.png')]" >
            <Header />
            <main className="font-bold py-5 text-3xl overflow-hidden text-gray-900">
                <Intro />
                <Skills />
                <Projects />
                <Timeline />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

AOS.init({
    duration: 1000,
    once: true,
    delay: 300,
    offset: (window.innerHeight * .3)
});

export default App;
