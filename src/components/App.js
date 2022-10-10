import React from 'react';
import Top from './Top';
import MainContent from './MainContent';
import Skills from './Skills';
import Credentials from './Credentials';
import About from './About';
import Projects from './Projects';
import Bottom from './Bottom';
import Start from './Start';
import ContactMe from './ContactMe';
import './App.css';
import './Mobile.css';

const App = () => {
  return (
    <div>
      <Start />
      <Top />
      <MainContent />
      <About />
      <Bottom />
      <Skills />
      <Bottom />
      <Credentials />
      <Projects />
      <ContactMe />
      <Bottom />
    </div>
  );
};

export default App;
