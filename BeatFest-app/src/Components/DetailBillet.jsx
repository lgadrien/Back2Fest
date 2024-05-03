import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { usePanier } from './PanierContext';

function DetailBillet() {
  const { id } = useParams();
  const { ajouterAuPanier: addToCart } = usePanier(); 
  const [billet, setBillet] = useState(null);
  const [quantite, setQuantite] = useState(0); 
  const [descriptionButton, setDescriptionButton] = useState('+');
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/data/${id}`)
      .then(response => {
        setBillet(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails du billet :', error);
      });
  }, [id]);

  const handleQuantiteChange = (e) => {
    setQuantite(parseInt(e.target.value));
  };

  const toggleDescription = () => {
      setDescriptionVisible(!descriptionVisible);
      setDescriptionButton(descriptionVisible ? '+' : '-');
    };

  const fraisDeServiceParBillet = billet ? (billet.prix * 0.05) : 0;
  const fraisDeService = quantite * fraisDeServiceParBillet;
  const total = billet ? (billet.prix * quantite) + fraisDeService : 0;

  const ajouterAuPanier = () => {
    const nouvelArticle = { ...billet, quantite };
    addToCart(nouvelArticle); // Utilisez le nouveau nom de la fonction ici
  };

  return (
    <div className='bg-slate-800'>
      {billet ? (
        <div className='p-10 flex'>
          <img src={billet.image_path} />
          <div className="p-10 mr-20 max-w-md">
              <h2 className='text-2xl text-white font-bold mb-3'>{billet.name}</h2>
              <h2 className='text-2xl text-white'>{billet.prix}€</h2>
              <div className="mt-4">
                <p className='text-white'>Sélectionnez la quantité :</p>
                <select
                  className="border border-gray-300 rounded px-3 py-1 mt-2 focus:outline-none"
                  value={quantite}
                  onChange={handleQuantiteChange}
                >
                  {[...Array(9).keys()].map((value) => (
                    <option key={value} value={value}>{value}</option>
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
                  <p>{billet.description}</p>
                  </div>
              )}
          </div>
          <div className="bg-gray-200 rounded-lg h-5/6">
              <div className='p-5 mb-4'>
                  <h2>Articles sélectionnés</h2>
                  <h2 className='font-bold text-2xl'>x{quantite}</h2>
              </div>
              <div className="bg-zinc-300">
                  <div className="flex font-bold ">
                      <h2 className='pt-3 pl-5 pb-3'>{billet.name} </h2>
                      <h2 className='pt-3 pb-3'>/ {billet.jour} jours /</h2>
                      <h2 className='pt-3 pb-3 pr-5'> Du 18 au 21 juillet 2024 </h2>
                  </div>
                  <h2 className='pl-5 pb-5'>{billet.prix}€ + frais de billetterie</h2>
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
              <button className="m-7 w-5/6 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300" onClick={ajouterAuPanier}>Ajouter au panier</button>
          </div>
        </div>
      ) : (
        <p>Chargement des détails du billet...</p>
      )}
    </div>
  );
}

export default DetailBillet;