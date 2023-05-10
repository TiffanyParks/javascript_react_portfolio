import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      <MyWork />
      <ContactMe />
    </div>
  );
}

export default App;
