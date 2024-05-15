import './App.css';
import "./fonts.css";
import Header from './Header';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Timeline from './Timeline';
import Contact from './Contact';
import Footer from './Footer';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Header />
        <main className="main">
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

export default App;
