import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { usePanier } from './PanierContext';

function DetailBillet() {
  const { id } = useParams();
  const { ajouterAuPanier: addToCart } = usePanier(); 
  const [billet, setBillet] = useState(null);
  const [quantite, setQuantite] = useState(1);  // Start with 1 for better user experience
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/data/${id}`)
      .then(response => {
        setBillet(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails du billet:', error);
      });
  }, [id]);

  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
  };

  const handleQuantiteChange = (e) => {
    setQuantite(parseInt(e.target.value, 10));
  };

  const fraisDeServiceParBillet = billet ? billet.prix * 0.05 : 0;
  const fraisDeService = quantite * fraisDeServiceParBillet;
  const total = billet ? (billet.prix * quantite) + fraisDeService : 0;

  const ajouterAuPanier = () => {
    addToCart({ ...billet, quantite });
  };

  return (
    <div className='bg-slate-800 min-h-screen'>
      {billet ? (
        <div>
            <div className='flex items-center space-x-2 pl-10 pt-5 text-white text-lg sm:text-2xl font-sans'>
    <a href='/' className='hover:underline' title='Accueil'>Accueil</a>
    <p>/</p>
    <a href='/billetterie' className='hover:underline' title='Billets'>Billets</a>
    <p>/</p>
    <span>{billet.name}</span>
</div>
          <div className='bg-slate-800 min-h-screen py-4 md:py-10 flex flex-col items-center'>
          <div className='max-w-4xl w-full px-4 md:flex md:items-start md:justify-between'>
            <div className="flex flex-col items-center md:items-start md:flex-1 md:mr-4">
              <img src={billet.image_path} alt={billet.name} className='w-full md:w-48 md:h-48' />
              <div className="text-center md:text-left">
                <h2 className='text-2xl text-white font-bold my-3'>{billet.name}</h2>
                <h3 className='text-xl text-white'>{billet.prix}€</h3>
                <div>
                  <label htmlFor="quantite" className='text-white'>Quantité:</label>
                  <select
                    id="quantite"
                    className="ml-2 border border-gray-300 rounded px-3 py-1 focus:outline-none"
                    value={quantite}
                    onChange={handleQuantiteChange}
                  >
                {[...Array(10).keys()].map(n => {
                const value = n + 1;
              return (
              value <= 10 && (
              <option key={value} value={value}>{value}</option>
                  )
                  );
                  })}
                  </select>
                </div>
                <button className='mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600' onClick={toggleDescription}>
                  {descriptionVisible ? 'Masquer' : 'Voir'} description
                </button>
              </div>
              {descriptionVisible && <p className='text-white mt-2'>{billet.description}</p>}
            </div>
            <div className="bg-gray-200 rounded-lg p-5 mt-5 md:mt-0 md:flex-1">
              <h3 className='font-bold text-xl mb-2'>Détails du billet</h3>
              <p>x{quantite} - {billet.name}</p>
              <p>Du 18 au 21 juillet 2024</p>
              <div>
                <p>Frais de service: {fraisDeService.toFixed(2)}€</p>
                <p className='font-bold'>Total: {total.toFixed(2)}€</p>
              </div>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800" onClick={ajouterAuPanier}>Ajouter au panier</button>
            </div>
          </div>
        </div>
        </div>
      ) : (
        <p className='text-white'>Chargement...</p>
      )}
    </div>
  );
}

export default DetailBillet;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { usePanier } from './PanierContext';

// function DetailBillet() {
//   const { id } = useParams();
//   const { ajouterAuPanier: addToCart } = usePanier(); 
//   const [billet, setBillet] = useState(null);
//   const [quantite, setQuantite] = useState(0); 
//   const [descriptionButton, setDescriptionButton] = useState('+');
//   const [descriptionVisible, setDescriptionVisible] = useState(false);

//   useEffect(() => {
//     axios.get(`http://127.0.0.1:5000/api/data/${id}`)
//       .then(response => {
//         setBillet(response.data);
//       })
//       .catch(error => {
//         console.error('Erreur lors de la récupération des détails du billet :', error);
//       });
//   }, [id]);

//   const handleQuantiteChange = (e) => {
//     setQuantite(parseInt(e.target.value));
//   };

//   const toggleDescription = () => {
//       setDescriptionVisible(!descriptionVisible);
//       setDescriptionButton(descriptionVisible ? '+' : '-');
//     };

//   const fraisDeServiceParBillet = billet ? (billet.prix * 0.05) : 0;
//   const fraisDeService = quantite * fraisDeServiceParBillet;
//   const total = billet ? (billet.prix * quantite) + fraisDeService : 0;

//   const ajouterAuPanier = () => {
//     const nouvelArticle = { ...billet, quantite };
//     addToCart(nouvelArticle); // Utilisez le nouveau nom de la fonction ici
//   };

//   return (
//     <div className='bg-slate-800 min-h-screen py-10 flex flex-col justify-center'>
//       {billet ? (
//         <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
//           <img src={billet.image_path} />
//           <div className="md:flex md:items-center md:justify-between">
//               <h2 className='text-2xl text-white font-bold mb-3'>{billet.name}</h2>
//               <h2 className='text-2xl text-white'>{billet.prix}€</h2>
//               <div className="mt-4">
//                 <p className='text-white'>Sélectionnez la quantité :</p>
//                 <select
//                   className="border border-gray-300 rounded px-3 py-1 mt-2 focus:outline-none"
//                   value={quantite}
//                   onChange={handleQuantiteChange}
//                 >
//                   {[...Array(9).keys()].map((value) => (
//                     <option key={value} value={value}>{value}</option>
//                   ))}
//                 </select>
//               </div>
//               <button className='w-full text-xl border-b-2 p-6 mb-3 text-white' onClick={toggleDescription}>
//                   <div className='flex justify-between'>
//                   <p>Description</p>
//                   <p>{descriptionButton}</p>
//                   </div>
//               </button>
//               {descriptionVisible && (
//                   <div className='text-lg text-white'>
//                   <p>{billet.description}</p>
//                   </div>
//               )}
//           </div>
//           <div className="bg-gray-200 rounded-lg h-5/6">
//               <div className='p-5 mb-4'>
//                   <h2>Articles sélectionnés</h2>
//                   <h2 className='font-bold text-2xl'>x{quantite}</h2>
//               </div>
//               <div className="bg-zinc-300">
//                   <div className="flex font-bold ">
//                       <h2 className='pt-3 pl-5 pb-3'>{billet.name} </h2>
//                       <h2 className='pt-3 pb-3'>/ {billet.jour} jours /</h2>
//                       <h2 className='pt-3 pb-3 pr-5'> Du 18 au 21 juillet 2024 </h2>
//                   </div>
//                   <h2 className='pl-5 pb-5'>{billet.prix}€ + frais de billetterie</h2>
//               </div>
//               <hr className="ml-5 mr-5 my-4 border-t-2 border-gray-500" />
//               <div className="font-bold pl-5 pr-5">
//                   <div className="flex justify-between">
//                       <h2>Frais de service</h2>
//                       <h2>{fraisDeService.toFixed(2)} €</h2>
//                   </div>
//                   <div className="flex justify-between mb-2">
//                       <h2>Total</h2>
//                       <h2>{total.toFixed(2)} €</h2>
//                   </div>
//               </div>
//               <button className="m-7 w-5/6 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300" onClick={ajouterAuPanier}>Ajouter au panier</button>
//           </div>
//         </div>
//       ) : (
//         <p>Chargement des détails du billet...</p>
//       )}
//     </div>
//   );
// }

// export default DetailBillet;