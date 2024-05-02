import React, { createContext, useContext, useState } from 'react';

const PanierContext = createContext();

export const usePanier = () => {
  return useContext(PanierContext);
};

export const PanierProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);

  const ajouterAuPanier = (article) => {
    setPanier([...panier, article]);
  };

  return (
    <PanierContext.Provider value={{ panier, ajouterAuPanier }}>
      {children}
    </PanierContext.Provider>
  );
};
