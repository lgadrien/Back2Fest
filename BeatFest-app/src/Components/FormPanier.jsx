import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePanier } from './PanierContext';

function FormPanier() {
  const location = useLocation();
  const { billet, nombreJours } = location.state || {};
  const { panier } = usePanier();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { nom, prenom, email } = event.target.elements;

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: nom.value,
          prenom: prenom.value,
          email: email.value,
          billet: panier[panier.length - 1].billet,
          nombreJours: panier[panier.length - 1].nombreJours
        }),
      });
      const data = await response.json();
      console.log('Réponse du serveur :', data);

      event.target.reset();

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données :', error);
    }
  };

  return (
    <div className='flex-col justify-center'>
      <p className='flex justify-center p-10 text-2xl'>Entrez votre Nom & Prénom pour recevoir vos billets :</p>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-2/3 lg:w-1/2 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom">Votre Nom</label>
              <input
                id="nom"
                className="w-full h-12 rounded-md border-none shadow-input px-2 py-1 transition-all duration-200 ease-in-out opacity-80 text-black placeholder-gray-600"
                placeholder="Votre Nom"
                name="nom"
                type="text"
                required
              />
            </div>
            <div>
              <label htmlFor="prenom">Votre Prénom</label>
              <input
                id="prenom"
                className="w-full h-12 rounded-md border-none shadow-input px-2 py-1 transition-all duration-200 ease-in-out opacity-80 text-black placeholder-gray-600"
                placeholder="Votre Prénom"
                name="prenom"
                type="text"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Votre Email</label>
            <input
              id="email"
              className="w-full h-12 rounded-md border-none shadow-input px-2 py-1 transition-all duration-200 ease-in-out opacity-80 text-black placeholder-gray-600"
              placeholder="Email"
              name="email"
              type="email"
              required
            />
          </div>
          {billet && (
            <div>
              <label htmlFor="billet">Type de billet</label>
              <input
                id="billet"
                className="w-full h-12 rounded-md border-none shadow-input px-2 py-1 transition-all duration-200 ease-in-out opacity-80 text-black placeholder-gray-600"
                value={`${nombreJours} jours ${billet.name}`}
                name="billet"
                type="text"
                readOnly
              />
            </div>
          )}
          <div className="flex justify-center">
            <button className="bg-gray-300 text-black font-montserrat text-2xl p-2 rounded-lg shadow-md cursor-pointer transition duration-100 ease-in-out active:shadow-none active:inset-0.5 active:translate-x-0.5 active:translate-y-0.5 hover:scale-105">Envoyer & Commander</button>
          </div>
        </form>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-xl mb-4">Consulter vos mails pour votre billet.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormPanier;
