import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const PanierContext = createContext();

export const usePanier = () => useContext(PanierContext);

export const PanierProvider = ({ children }) => {
  const [panier, setPanier] = useState(() => {
    const panierData = Cookies.get('panier');
    return panierData ? JSON.parse(panierData) : [];
  });

  useEffect(() => {
    if (!Cookies.get('panier')) {
      Cookies.set('panier', JSON.stringify(panier));
    }
  }, []); // Définit le cookie une seule fois lors de l'initialisation du panier

  useEffect(() => {
    Cookies.set('panier', JSON.stringify(panier));
  }, [panier]); // Met à jour le cookie uniquement lorsque le panier change

  const ajouterAuPanier = (article) => {
    setPanier([...panier, article]);
  };

  const viderPanier = () => {
    setPanier([]);
  };

  return (
    <PanierContext.Provider value={{ panier, ajouterAuPanier, viderPanier }}>
      {children}
    </PanierContext.Provider>
  );
};