// PanierContext.js

import React, { useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';

const PanierContext = React.createContext();

export const PanierProvider = ({ children }) => {
  const [panier, setPanier] = useState(() => {
    const panierData = Cookies.get('panier');
    return panierData ? JSON.parse(panierData) : [];
  });

  useEffect(() => {
    if (!Cookies.get('panier')) {
      Cookies.set('panier', JSON.stringify(panier));
    }
  }, []); 

  useEffect(() => {
    Cookies.set('panier', JSON.stringify(panier));
  }, [panier]); 

  const ajouterAuPanier = (article) => {
    // Vérifier si la quantité maximale n'est pas atteinte
    const billetDejaDansPanier = panier.find(item => item.id === article.id);
    if (billetDejaDansPanier && billetDejaDansPanier.quantite + article.quantite > 8) {
      // Si la quantité maximale est atteinte, ne rien faire
      return;
    }
    
    // Sinon, ajouter l'article au panier
    setPanier([...panier, article]);
  };

  const viderPanier = () => {
    setPanier([]);
  };

  const modifierQuantite = (article, nouvelleQuantite) => {
    const nouveauPanier = panier.map((item) => {
      if (item.id === article.id) {
        return { ...item, quantite: nouvelleQuantite };
      }
      return item;
    });
    setPanier(nouveauPanier);
  };

  return (
    <PanierContext.Provider value={{ panier, ajouterAuPanier, viderPanier, modifierQuantite }}>
      {children}
    </PanierContext.Provider>
  );
};

export const usePanier = () => {
  return useContext(PanierContext);
};
