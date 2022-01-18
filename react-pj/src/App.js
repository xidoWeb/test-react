import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import RouterPage from './Router/RouterPage';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouterPage />  
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

