import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
// Components du Header
import Evenement from './Components/evenement';
import Billetterie from './Components/Billetterie';
import Artistes from './Components/Artistes';
import InfoPratiques from './Components/infos-pratiques';
import Panier from './Components/Panier';
// Components du Footer
import Contact from '../src/Components/contact';
import MentionsLegales from './Components/mentions-legales';
import PolitiqueConfidentialite from './Components/politique-de-confidentialité';
// Billets
import DetailBillet from './Components/DetailBillet';
// Panier
import { PanierProvider } from './Components/PanierContext';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <PanierProvider>
        <Header />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/*" element={<Error/>}/>
          {/* Pages de la navbar */}
          <Route path="/" element={<Home/>} />
          <Route path="/evenement" element={<Evenement/>}/>
          <Route path="/billetterie" element={<Billetterie/>}/> 
          <Route path="/artistes" element={<Artistes/>}/>
          <Route path="/infos" element={<InfoPratiques/>}/>
          <Route path="/panier" element={<Panier/>}/>
          {/* Pages du footer */}
          <Route path="/contact" element={<Contact/>} />
          <Route path="/mentions-legales" element={<MentionsLegales/>} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite/>} />
          {/* Route des items */}
          <Route path="billet/:id" element={<DetailBillet />}/>
        </Routes>
        </main>
        <Footer />
      </PanierProvider>
      </div>
    </Router>
  );
};

export default App;
