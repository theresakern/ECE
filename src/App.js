import React, { useState } from 'react';
import Footer from './Footer';
/* import Footer from './Footer';
import Header from './Header';
import ContentTab from './ContentTab';
import './App.css';


*/


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import ContentTab from './ContentTab';

function App() {
  return (
    <div className="app">
      <Header />
      <ContentTab />
      <Footer />
    </div>
  );
}

export default App;