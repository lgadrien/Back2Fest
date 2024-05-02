import React from 'react';
import { usePanier } from './PanierContext';

function Panier() {
  const { panier } = usePanier();

  return (
    <div className='text-white h-screen bg-slate-800 text-2xl font-bold justify-center'>
      <h2>Votre Panier</h2>
      {panier.map((article, index) => (
        <div key={index}>
          <p>{article.name} - Quantité: {article.quantite}</p>
          <p>Prix unitaire: {article.prix}€</p>
        </div>
      ))}
    </div>
  );
}

export default Panier;
