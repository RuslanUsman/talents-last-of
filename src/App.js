import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainMenu from './components/MainMenu/MainMenu';
import Instinct from './components/Categories/Instinct';
import Intelligence from './components/Categories/Intelligence';
import Fight from './components/Categories/Fight';
import Price from './components/Categories/Price';
import Assembling from './components/Categories/Assembling';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/instinct" element={<Instinct />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/fight" element={<Fight />} />
        <Route path="/price" element={<Price />} />
        <Route path="/assembling" element={<Assembling />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
