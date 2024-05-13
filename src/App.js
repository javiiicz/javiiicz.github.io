import './App.css';
import "./fonts.css";
import Header from './Header';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Header />
        <main class="main">
          <Intro />
          <Skills />
          <Projects />
        </main>
    </div>
  );
}

export default App;
