import React, { useState } from 'react';
import '../CSS/artistes.css'; // Assurez-vous d'ajouter ce fichier CSS

const artistesData = [
    { id: 1, nom: 'Werenoi', photoUrl: 'https://lautrecanalnancy.fr/sites/default/files/lautrecanal/styles/1x1_1280/public/ged/werenoicfifou_3.jpg?itok=AKtGw_Pb' },
    { id: 2, nom: 'Kaaris', photoUrl: 'https://media-mcetv.ouest-france.fr/wp-content/uploads/2018/04/Kaaris-balance-un-beau-message-aux-racistes-1000.jpg' },
    { id: 3, nom: 'SCH', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Festival_des_Vieilles_Charrues_2022_-_SCH_-_038_%28cropped%29.jpg' },
    { id: 4, nom: 'Gims', photoUrl: 'https://www.xalimasn.com/wp-content/uploads/2020/10/pp-gims.jpg' },
    { id: 5, nom: 'Gazo', photoUrl: 'https://cdn.shopify.com/s/files/1/0272/9059/9521/files/GAZO-_RAPPEUR_-BIOGRAPHIE_-PARCOURS-AGE-FORTUNE-FEMME-URB1_-3_600x600.png?v=1660560210' },
    { id: 6, nom: 'Nekfeu', photoUrl: 'https://i.pinimg.com/1200x/36/2e/3a/362e3ae7d6b99932d25d9999d06113d9.jpg' }
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
            <h1 className='mt-5'>Artistes</h1>
            <div className='grid grid-cols-3 gap-4'>
                {artistesData.map((artiste, index) => (
                    <div key={artiste.id} className='artiste mt-10'>
                        <div className='image-container'>
                            <img 
                                src={artiste.photoUrl} 
                                alt={artiste.nom} 
                                className={`rounded-full w-48 h-48 object-cover ${visible[index] ? 'normal' : 'blurred'}`} 
                            />
                            <button onClick={() => toggleVisibility(index)} className='reveal-btn'>Afficher</button>
                        </div>
                        <h2>{artiste.nom}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artistes;
