import React from 'react'

const panier = () => {
  return (
<<<<<<< Updated upstream
    <div>Panier</div>
  )
=======
    <div className='h-screen bg-slate-800'>
            <div className='flex items-center space-x-2 pl-10 pt-5 text-white text-lg sm:text-2xl font-sans'>
    <a href='/' className='hover:underline' title='Accueil'>Accueil</a>
    <p>/</p>
    <span>Panier</span>
    <br />
</div>
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
>>>>>>> Stashed changes
}

export default panier