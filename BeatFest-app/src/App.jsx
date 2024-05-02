<<<<<<< Updated upstream
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; // Assurez-vous que le chemin d'accès est correct
import Home from './Components/Home';
import Contact from '../src/Components/contact';
import MentionsLegales from './Components/mentions-legales';
import PolitiqueConfidentialite from './Components/politique-de-confidentialité';
import Billetterie from './Components/Billetterie';
import DetailBillet from './Components/DetailBillet';
import Panier from './Components/Panier';
import Error from './Components/Error';
import { PanierProvider } from './Components/PanierContext';
import Footer from '../src/Components/Footer'; // Si vous avez un Footer
>>>>>>> Stashed changes

  return (
<<<<<<< Updated upstream
    <> </>
  )
}
=======
    <Router>
      <div className="App">
      <PanierProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/mentions-legales" element={<MentionsLegales/>} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/billetterie" element={<Billetterie />} />
          <Route path="/*" element={<Error/>} />
          <Route path="/billet/:id" element={<DetailBillet />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite/>} />
        </Routes>
        <Footer />
      </PanierProvider>
      </div>
    </Router>
  );
};
>>>>>>> Stashed changes

export default App
