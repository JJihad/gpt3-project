import React from 'react';
import { Header, Blog, Features, Possibility, WhatGPT3, Footer } from './containers';
import { Cta, Brand, Navbar } from './components';
import './app.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Brand />
      </div>

      <WhatGPT3 />
      <Features />
      <Possibility />
      <Blog />
      <Footer />
    </div>
  );
}

export default App