import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { usePanier } from './PanierContext';

function DetailBillet() {
  const { id } = useParams();
  const { ajouterAuPanier: addToCart, panier } = usePanier();
  const [billet, setBillet] = useState(null);
  const [quantite, setQuantite] = useState(0);
  const [nombreJours, setNombreJours] = useState(1);
  const [fraisDeService, setFraisDeService] = useState(0);
  const [descriptionButton, setDescriptionButton] = useState('+');
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showQuantityPopup, setShowQuantityPopup] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/data/${id}`)
      .then(response => {
        setBillet(response.data);
        setFraisDeService(response.data[`prix_${nombreJours}jours`] * 0.05);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails du billet :', error);
      });
  }, [id, nombreJours]);

  useEffect(() => {
    document.title = 'Beat Fest - Billetterie';
  }, []);

  const handleQuantiteChange = (e) => {
    setQuantite(parseInt(e.target.value));
  };

  const handleNombreJoursChange = (e) => {
    setNombreJours(parseInt(e.target.value));
    setFraisDeService(billet ? billet[`prix_${e.target.value}jours`] * 0.05 : 0);
  };

  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
    setDescriptionButton(descriptionVisible ? '+' : '-');
  };

  const total = billet ? (billet[`prix_${nombreJours}jours`] * quantite) + fraisDeService : 0;

  const ajouterAuPanier = () => {
    console.log("Ajout au panier :", { billet: billet.name, quantite, nombreJours });
    const fraisDeServiceParBillet = billet[`prix_${nombreJours}jours`] * 0.05;
    const totalParBillet = billet[`prix_${nombreJours}jours`] + fraisDeServiceParBillet;
    
    const articleExistantIndex = panier.findIndex(article => article.id === billet.id);
    const articleExistant = panier[articleExistantIndex];
    const quantiteTotale = panier.reduce((total, article) => total + article.quantite, 0);
    const nouvelleQuantite = articleExistant ? articleExistant.quantite + quantite : quantite;
  
    const nouvelArticle = {
      ...billet, quantite, nombreJours, billet: billet.name,
      fraisDeService: fraisDeServiceParBillet * quantite,
      total: totalParBillet * quantite
    };
  
    if (quantite === 0) {
      setShowQuantityPopup(true);
      setTimeout(() => {
        setShowQuantityPopup(false);
      }, 2000);
    } else if (articleExistant) {
      if (quantiteTotale + quantite > 8) {
        alert("Vous avez déjà 8 places de ce billet dans votre panier.");
      } else {
        const nouveauxArticles = [...panier];
        nouveauxArticles[articleExistantIndex] = { ...articleExistant, quantite: nouvelleQuantite, nombreJours, billet: billet.name };
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      }
    } else {
      if (panier.length > 0) {
        alert("Vous avez déjà quelque chose dans le panier.");
      } else {
        addToCart(nouvelArticle);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      }
    }
  };

  return (
    <div className='bg-slate-800 h-screen'>
      {billet ? (
        <div>
          <div className='flex items-center space-x-2 pl-10 pt-5 text-white text-lg sm:text-2xl font-sans'>
            <a href='/' className='hover:underline' title='Accueil'>Accueil</a>
            <p>/</p>
            <a href='/billetterie' className='hover:underline' title='Billets'>Billets</a>
            <p>/</p>
            <span>{billet.name}</span>
          </div>
          <div className='p-10 flex'> 
            <img src={billet.image_path} alt={billet.name} />
            <div className="p-10 mr-20 max-w-md">
              <h2 className='text-2xl text-white font-bold mb-3'>{billet.name}</h2>
              <h2 className='text-2xl text-white'>{billet[`prix_${nombreJours}jours`]}€</h2>
              <div className="mt-4">
                <p className='text-white'>Sélectionnez la quantité :</p>
                <select
                  className="border border-gray-300 rounded px-3 py-1 mt-2 focus:outline-none"
                  value={quantite}
                  onChange={handleQuantiteChange}
                >
                  {[...Array(8).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
                <p className='text-white'>Sélectionnez le nombre de jours :</p>
                <select
                  className="border border-gray-300 rounded px-3 py-1 mt-2 focus:outline-none"
                  value={nombreJours}
                  onChange={handleNombreJoursChange}
                >
                  {[1, 2, 3].map((value) => (
                    <option key={value} value={value}>{`${value} jour(s)`}</option>
                  ))}
                </select>
              </div>
              <button className='w-full text-xl border-b-2 p-6 mb-3 text-white' onClick={toggleDescription}>
                <div className='flex justify-between'>
                  <p>Description</p>
                  <p>{descriptionButton}</p>
                </div>
              </button>
              {descriptionVisible && (
                <div className='text-lg text-white'>
                  <p className='w-64'>{billet.description}</p>
                </div>
              )}
            </div>
            <div className="bg-gray-200 rounded-lg h-5/6 w-96">
              <div className='p-5 mb-4'>
                <h2>Articles sélectionnés</h2>
                <h2 className='font-bold text-2xl'>x{quantite}</h2>
              </div>
              <div className="bg-zinc-300">
                <div className="font-bold gap-2">
                  <h2 className='pt-3 pl-5 pb-3'>{billet.name} </h2>
                  <h2 className='pt-1 pb-3 pl-5'> Du 18 au 21 juillet 2024 </h2>
                </div>
                <h2 className='pl-5 pb-5'>{billet[`prix_${nombreJours}jours`]}€ + frais de billetterie</h2>
              </div>
              <hr className="ml-5 mr-5 my-4 border-t-2 border-gray-500" />
              <div className="font-bold pl-5 pr-5">
                <div className="flex justify-between">
                  <h2>Frais de service</h2>
                  <h2>{fraisDeService.toFixed(2)} €</h2>
                </div>
                <div className="flex justify-between mb-2">
                  <h2>Total</h2>
                  <h2>{total.toFixed(2)} €</h2>
                </div>
              </div>
              <button className="m-7 w-5/6 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300 active:transform active:translate-y-1" onClick={ajouterAuPanier}>Ajouter au panier</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Chargement des détails du billet...</p>
      )}
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
          <p className="text-center">Article ajouté au panier !</p>
        </div>
      )}
      {showQuantityPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
          <p className="text-center">Veuillez choisir une quantité d'abord.</p>
        </div>
      )}
    </div>
  );
}

export default DetailBillet;
