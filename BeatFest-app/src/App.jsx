import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
// Components du Header
import Evenement from './Components/evenement'
import Billeterie from './Components/billeterie'
import Artistes from './Components/artistes'
import Panier from './Components/panier';
// Components du Footer
import Contact from '../src/Components/contact';
import MentionsLegales from './Components/mentions-legales';
import PolitiqueConfidentialite from './Components/politique-de-confidentialité';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
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
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
