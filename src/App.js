import React from 'react';
// import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
