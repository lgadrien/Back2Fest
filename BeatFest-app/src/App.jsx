import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; // Assurez-vous que le chemin d'accès est correct
import Home from './Components/Home';
import Contact from '../src/Components/contact';
import MentionsLegales from './Components/mentions-legales';
import PolitiqueConfidentialite from './Components/politique-de-confidentialité';
import Footer from '../src/Components/Footer'; // Si vous avez un Footer

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/mentions-legales" element={<MentionsLegales/>} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
