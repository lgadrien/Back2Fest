import React from 'react';
import { usePanier } from './PanierContext';
import { FaRegTrashAlt } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function Panier() {
  const { panier, viderPanier, modifierQuantite } = usePanier(); // Importez la fonction modifierQuantite depuis le contexte du panier

  const prixTotal = panier.reduce((total, article) => {
    return total + article.prix * article.quantite;
  }, 0);

  const handleClickViderPanier = () => {
    viderPanier(); 
  };

  const handleAugmenterQuantite = (article) => {
    modifierQuantite(article, article.quantite + 1);
  };

  const handleDiminuerQuantite = (article) => {
    if (article.quantite > 1) {
      modifierQuantite(article, article.quantite - 1);
    }
  };

  return (
    <div className='h-screen bg-slate-800'>
      <div className='text-white text-2xl font-bold'>
        <h2>Votre Panier</h2>
        {panier.map((article, index) => (
          <div key={index}>
            <p>{article.name} - Quantité: {article.quantite}</p>
            <p className='flex'>
              <CiCirclePlus onClick={() => handleAugmenterQuantite(article)} />
              <CiCircleMinus onClick={() => handleDiminuerQuantite(article)} />
            </p>
            <p>Prix unitaire: {article.prix}€</p>
          </div>
        ))}
        <p>Prix total: {prixTotal.toFixed(2)}€</p>
      </div>
      <div className='text-white text-2xl'>
        <FaRegTrashAlt onClick={handleClickViderPanier} /> {/* Ajoutez un gestionnaire d'événements pour vider le panier */}
      </div>
    </div>
  );
}


export default Panier;