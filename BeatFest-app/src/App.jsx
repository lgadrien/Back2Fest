import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// Components du Header
import Evenement from "./Components/evenement";
import Billeterie from "./Components/Billetterie";
import Artistes from "./Components/Artistes";
import Panier from "./Components/Panier";
// Components du Footer
import Contact from "./Components/contact";
import MentionsLegales from "./Components/mentions-legales";
import PolitiqueConfidentialite from "./Components/politique-de-confidentialité";
// Billets
import DetailBillet from "./Components/DetailBillet";
// Panier
import { PanierProvider } from "./Components/PanierContext";
import Checkout from "./Components/Checkout";
import EnvoieBillets from "./Components/EnvoieBillets";
import CommandePasse from "./Components/CommandePasse";
// Admin
import LoginAdmin from "./Components/admin/loginadmin";
import AdminPanel from "./Components/admin/adminpanel";
import { AuthProvider } from "./Components/admin/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <PanierProvider>
            <Header />
            <main className="flex-grow">
              <Routes>
                {/* Routes publiques */}
                <Route path="/" element={<Home />} />
                <Route path="/evenement" element={<Evenement />} />
                <Route path="/billetterie" element={<Billeterie />} />
                <Route path="billet/:id" element={<DetailBillet />} />
                <Route path="/artistes" element={<Artistes />} />
                <Route path="/panier" element={<Panier />} />
                <Route path="/envoie" element={<EnvoieBillets />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/commande-effectué" element={<CommandePasse />} />
                {/* Pages du footer */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
                {/* Routes Admin */}
                <Route path="/adminlogin" element={<LoginAdmin />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/adminpanel" element={<AdminPanel />} />
                </Route>
                <Route path="*" element={<Error />} />
              </Routes>
            </main>
            <Footer />
          </PanierProvider>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
