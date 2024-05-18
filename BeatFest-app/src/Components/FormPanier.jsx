import React from 'react';

function FormPanier() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { nom, prenom, email, billet } = event.target.elements;

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
          billet: billet.value || 'Standard',  // Provide a default value if not selected
        }),
      });
      const data = await response.json();
      console.log('Réponse du serveur :', data);

      event.target.reset();
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
          <div>
            <label htmlFor="billet">Type de billet</label>
            <select
              id="billet"
              className="w-full h-12 rounded-md border-none shadow-input px-2 py-1 transition-all duration-200 ease-in-out opacity-80 text-black placeholder-gray-600"
              name="billet"
              required
            >
              <option value="Aucun">Aucun</option>
              <option value="1 jour Standard">1 jour Standard</option>
              <option value="2 jours Standard">2 jours Standard</option>
              <option value="3 jours Standard">3 jours Standard</option>
              <option value="1 jour Premium">1 jour Premium</option>
              <option value="2 jours Premium">2 jours Premium</option>
              <option value="3 jours Premium">3 jours Premium</option>
              <option value="1 jour VIP">1 jour VIP</option>
              <option value="2 jours VIP">2 jours VIP</option>
              <option value="3 jours VIP">3 jours VIP</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button className="bg-gray-300 text-black font-montserrat text-2xl p-2 rounded-lg shadow-md cursor-pointer transition duration-100 ease-in-out active:shadow-none active:inset-0.5 active:translate-x-0.5 active:translate-y-0.5 hover:scale-105">Envoyer & Commander</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPanier;
