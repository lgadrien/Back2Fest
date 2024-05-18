// Partie Panier
import React, { useState } from 'react';
import { usePanier } from './PanierContext';
import { FaRegTrashAlt } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
import PanierForm from './FormPanier';

function Panier() {
  const { panier, viderPanier, modifierQuantite } = usePanier();
  const [isOpen, setIsOpen] = useState(Array(panier.length).fill(false));
  const [openedIndex, setOpenedIndex] = useState(null);

  const prixTotal = panier.reduce((total, article) => {
    const prix = parseFloat(article.prix_1jours).toFixed(2);
    const quantite = article.quantite;
    const nombreJours = article.nombreJours;

    if (!isNaN(prix) && !isNaN(quantite) && !isNaN(nombreJours)) {
      const prixArticle = prix * quantite * nombreJours;
      return total + prixArticle;
    } else {
      console.error("Erreur : Données manquantes ou invalides pour l'article :", article);
      return total;
    }
  }, 0);

  const handleAugmenterQuantite = (article) => {
    if (article.quantite < 8) {
      modifierQuantite(article, article.quantite + 1);
    }
  };

  const handleDiminuerQuantite = (article) => {
    if (article.quantite > 1) {
      modifierQuantite(article, article.quantite - 1);
    }
  };

  const toggleDropdown = (index) => {
    setIsOpen(prevState => {
      const updatedIsOpen = prevState.map((value, i) => i === index ? !value : false);
      return updatedIsOpen;
    });
    setOpenedIndex(index);
  };

  const handleClickViderPanier = () => {
    if (openedIndex !== null) {
      const nouveauPanier = panier.filter((_, index) => index !== openedIndex);
      viderPanier(nouveauPanier);
    }
  };

  return (
    <div className='h-screen bg-slate-800'>
      <div className='text-white'>
        {panier.length === 0 ? (
          <p className="text-center text-2xl font-bold p-8">Votre panier est vide</p>
        ) : (
          panier.map((article, index) => (
            <div key={index}>
              <div className='flex justify-center space-x-2 text-2xl mb-10 pt-8'>
                <p><LuShoppingBag/></p>
                <p>Total de votre commande :</p>
                <p>{prixTotal.toFixed(2)}€</p>
                <p>/</p>
                <p>{article.quantite}</p>
                <p>Billet(s)</p>
              </div>
              <div>
                <div className='center-screen'>
                  <div className='flex justify-center gap-8'>
                    <div className='flex items-center'>
                      <img src={article.image_path} alt={article.name} className="w-20 h-20" />
                      <p className="ml-2 text-2xl font-bold">{article.name} -  Quantité : {article.quantite}</p>
                    </div>
                    <div onClick={() => toggleDropdown(index)} className='cursor-pointer ml-5 pt-8'>{isOpen[index] ? <FaAngleUp/> : <FaAngleDown/>}</div>
                  </div>
                  {isOpen[index] && (
                    <div>
                      <p className='flex justify-center'>x {article.quantite}</p>
                      <p className='flex justify-center p-2'>
                        <button className="w-8 h-8 rounded-lg border-none outline-none bg-gray-300 shadow-md cursor-pointer font-montserrat transition duration-100 ease-in-out active:shadow-none active:inset-0.5 active:translate-x-0.5 active:translate-y-0.5 mr-2" onClick={() => handleAugmenterQuantite(article)}>
                          <h2 className='text-black p-2'><BsPlus /> </h2>
                        </button>
                        <button className="w-8 h-8 rounded-lg border-none outline-none bg-gray-300 shadow-md cursor-pointer font-montserrat transition duration-100 ease-in-out active:shadow-none active:inset-0.5 active:translate-x-0.5 active:translate-y-0.5" onClick={() => handleDiminuerQuantite(article)}>
                          <h2 className='text-black p-2'><BsDash /> </h2>
                        </button>
                        <div className='text-white text-2xl'>
                          <FaRegTrashAlt onClick={handleClickViderPanier} />
                        </div>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
        <PanierForm />
      </div>
    </div>
  );
}

export default Panier;
