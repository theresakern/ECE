import React, { useState } from 'react';
import Footer from './Footer';
/* import Footer from './Footer';
import Header from './Header';
import ContentTab from './ContentTab';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <ContentTab />
      <Footer />
    </div>
  );
} */


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import ContentTab from './ContentTab';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route path="/" component={ContentTab} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
