import React, { useState } from 'react';
import '../CSS/artistes.css'; // Assurez-vous d'ajouter ce fichier CSS

const artistesData = [
    { id: 1, nom: 'Werenoi', photoUrl: 'https://lautrecanalnancy.fr/sites/default/files/lautrecanal/styles/1x1_1280/public/ged/werenoicfifou_3.jpg?itok=AKtGw_Pb', description: "Description de Werenoi" },
    { id: 2, nom: 'Kaaris', photoUrl: 'https://media-mcetv.ouest-france.fr/wp-content/uploads/2018/04/Kaaris-balance-un-beau-message-aux-racistes-1000.jpg', description: "Description de Kaaris" },
    { id: 3, nom: 'SCH', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Festival_des_Vieilles_Charrues_2022_-_SCH_-_038_%28cropped%29.jpg', description: "Description de SCH" },
    { id: 4, nom: 'Gims', photoUrl: 'https://www.xalimasn.com/wp-content/uploads/2020/10/pp-gims.jpg', description: "Description de Gims" },
    { id: 5, nom: 'Gazo', photoUrl: 'https://cdn.shopify.com/s/files/1/0272/9059/9521/files/GAZO-_RAPPEUR_-BIOGRAPHIE_-PARCOURS-AGE-FORTUNE-FEMME-URB1_-3_600x600.png?v=1660560210', description: "Description de Gazo" },
    { id: 6, nom: 'Nekfeu', photoUrl: 'https://i.pinimg.com/1200x/36/2e/3a/362e3ae7d6b99932d25d9999d06113d9.jpg', description: "Description de Nekfeu" },
];

const Artistes = () => {
    const [visible, setVisible] = useState(Array(artistesData.length).fill(false));

    const toggleVisibility = (index) => {
        const newVisible = [...visible];
        newVisible[index] = !newVisible[index];
        setVisible(newVisible);
    };

    return (
        <div className='artistes-container'>
            <div className='flex items-center space-x-2 pl-10 pt-5 text-white text-lg sm:text-2xl font-sans'>
                <a href='/' className='hover:underline' title='Accueil'>Accueil</a>
                <p>/</p>
                <a href='/evenement' className='hover:underline' title='Evenement'>Evenement</a>
                <p>/</p>
                <span>Artistes</span>
            </div>

            <h1 className='mt-5 pb-5'>Programmation des artistes - 18 au 21 Juillet 2024</h1>
            <div className='grid grid-cols-5 gap-4 pb-10'>
                {artistesData.map((artiste, index) => (
                    <div key={artiste.id} className='artiste'>
                        <div className='image-container'>
                            <img 
                                src={artiste.photoUrl} 
                                alt={artiste.nom} 
                                className={`rounded-full w-48 h-48 object-cover ${visible[index] ? '' : 'blurred'}`} 
                            />
                            <button onClick={() => toggleVisibility(index)} className='reveal-btn'>Spoiler</button>
                        </div>
                        {visible[index] && <h2 className="nom-artiste">{artiste.nom}</h2>}
                        {visible[index] && <p>{artiste.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artistes;
