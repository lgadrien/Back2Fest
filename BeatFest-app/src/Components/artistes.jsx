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

const schedule = {
    '18 juillet 2025': [artistesData[0], artistesData[1]],
    '19 juillet 2025': [artistesData[2], artistesData[3]],
    '20 juillet 2025': [artistesData[4], artistesData[5]],
};

const Calendar = () => {
    const dates = Object.keys(schedule);
    const [visible, setVisible] = useState(
        Object.fromEntries(artistesData.map(artiste => [artiste.id, false]))
    );

    const toggleVisibility = (id) => {
        setVisible(prevVisible => ({ ...prevVisible, [id]: !prevVisible[id] }));
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

            <h1 className='mt-5 pb-5'>Programmation des artistes - 18 au 20 Juillet 2025</h1>

            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10'>
                        {dates.map(date => (
                            <div key={date} className='date-column ms-12 mt-5'>
                                <h2 className='text-center font-bold text-xl mb-4'>{date}</h2>
                                {schedule[date].map(artiste => (
                                    <div key={artiste.id} className='artiste mb-6'>
                                        <div className='image-container mb-2 relative'>
                                            <img 
                                                src={artiste.photoUrl} 
                                                alt={artiste.nom} 
                                                className={`rounded-full w-48 h-48 object-cover mx-auto ${visible[artiste.id] ? '' : 'blurred'}`} 
                                            />
                                            <button onClick={() => toggleVisibility(artiste.id)} className='reveal-btn absolute bottom-2 left-1/2 transform -translate-x-1/2'>
                                                {visible[artiste.id] ? 'Cacher' : 'Spoiler'}
                                            </button>
                                        </div>
                                        {visible[artiste.id] && <h3 className="nom-artiste text-center">{artiste.nom}</h3>}
                                        {visible[artiste.id] && <p className="text-center">{artiste.description}</p>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
