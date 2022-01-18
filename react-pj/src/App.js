import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './page/Home';
import About from './page/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route element={<Home />} />
        <Route element={<About />} />        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
