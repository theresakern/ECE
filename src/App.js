import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ContentTab from './ContentTab';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* Include your Header, Body, and Footer components */}
      <Header />
      <ContentTab />
      <Footer />
    </div>
  );
}

export default App;
