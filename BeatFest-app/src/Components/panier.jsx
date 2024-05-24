import React, { useState, useEffect } from 'react';
import { usePanier } from './PanierContext';
import { FaRegTrashAlt } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
import PanierForm from './FormPanier';
import PaymentOptions from './PaiementOptions';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function Panier() {
  const { panier, viderPanier, modifierQuantite } = usePanier();
  const [isOpen, setIsOpen] = useState(Array(panier.length).fill(false));
  const SERVICE_FEE_PERCENTAGE = 0.05; // Frais de service de 5%

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
  };

  const handleClickSupprimerArticle = (index) => {
    const nouveauPanier = panier.filter((_, i) => i !== index);
    viderPanier(nouveauPanier);
  };

  const totalBillets = panier.reduce((total, article) => total + article.quantite, 0);

  const prixTotal = panier.reduce((total, article) => {
    const prixUnitaire = parseFloat(article[`prix_${article.nombreJours}jours`]);
    const fraisService = prixUnitaire * SERVICE_FEE_PERCENTAGE;
    const prixAvecFrais = prixUnitaire + fraisService;
    console.log(`Article: ${article.name}, Prix unitaire: ${prixUnitaire}, Frais de service: ${fraisService}, Prix avec frais: ${prixAvecFrais}, Quantité: ${article.quantite}`);
    return total + (prixAvecFrais * article.quantite);
  }, 0);

  useEffect(() => {
    document.title = 'Beat Fest - Panier';
  }, []);

  return (
    <>
      <style>
        {`
          #root {
            background-color: #1E293B;
          }
        `}
      </style>
      <div className='bg-slate-800'>
        <div className='text-white'>
          {panier.length === 0 ? (
            <div>
              <p className="text-center text-2xl font-bold p-8 mb-14">Votre panier est vide</p>
              <div className='flex flex-col items-center pt-16'>
                <div className='flex'>
                  <MotionLink 
                    to="/billetterie" 
                    className="bg-white text-black font-bold py-2 px-4 rounded shadow"
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)" }}
                    whileTap={{ scale: 0.9, boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}
                  >
                    Achetez vos billets maintenant
                  </MotionLink>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className='flex justify-center space-x-2 text-2xl mb-4 pt-8'>
                <p><LuShoppingBag /></p>
                <p>Total de votre commande :</p>
                <p>{prixTotal.toFixed(2)}€ / {totalBillets} Billet(s)</p>
              </div>
              {panier.map((article, index) => (
                <div key={index}>
                  <div className='center-screen'>
                    <div className='flex justify-center gap-8'>
                      <div className='flex items-center'>
                        <img src={article.image_path} alt={article.name} className="w-20 h-20" />
                        <p className="ml-2 text-2xl font-bold">{article.name} -  Quantité : {article.quantite}</p>
                      </div>
                      <div onClick={() => toggleDropdown(index)} className='cursor-pointer ml-5 pt-8'>{isOpen[index] ? <FaAngleUp /> : <FaAngleDown />}</div>
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
                          <div className='text-white text-2xl pl-2 p-1'>
                            <FaRegTrashAlt onClick={() => handleClickSupprimerArticle(index)} />
                          </div>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className='p-10'><PaymentOptions /></div>
              
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Panier;
