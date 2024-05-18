import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
// Components du Header
import Evenement from './Components/evenement'
import Billeterie from './Components/billetterie'
import Artistes from './Components/artistes'
import Panier from './Components/panier';
// Components du Footer
import Contact from '../src/Components/contact';
import MentionsLegales from './Components/mentions-legales';
import PolitiqueConfidentialite from './Components/politique-de-confidentialité';
// Billets
import DetailBillet from './Components/DetailBillet';
// Panier
import { PanierProvider } from './Components/PanierContext';
// Admin
import LoginAdmin from './Components/admin/loginadmin';
import AdminPanel from './Components/admin/adminpanel';

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
          <Route path="/billetterie" element={<Billeterie/>}/> 
          <Route path="/artistes" element={<Artistes/>}/>
          <Route path="/panier" element={<Panier/>}/>
          {/* Pages du footer */}
          <Route path="/contact" element={<Contact/>} />
          <Route path="/mentions-legales" element={<MentionsLegales/>} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite/>} />
          {/* Route des items */}
          <Route path="billet/:id" element={<DetailBillet />}/>
          {/* Admin */}
          <Route path="/adminlogin" element={<LoginAdmin />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
        </main>
        <Footer />
      </PanierProvider>
      </div>
    </Router>
  );
};

export default App;
