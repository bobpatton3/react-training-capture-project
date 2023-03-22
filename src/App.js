import React from 'react';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
        <Nav />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname} >
            <Route path="/" element={<AboutUs />} />
            <Route path="work/*" element={<OurWork />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="work/:id" element={<MovieDetail />} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
