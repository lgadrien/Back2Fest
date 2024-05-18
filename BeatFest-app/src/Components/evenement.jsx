import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/evenement.css';

const Evenement = () => {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 font-serif"
        >
            <style>
                {`
                    #root {
                    background-color: #DCDCDC;
                }
                `}
            </style>
            
            
<div className='flex items-center space-x-2 pl-10 pt-5 text-white text-lg sm:text-2xl font-sans'>
    <a href='/' className='hover:underline' title='Accueil'>Accueil</a>
    <p>/</p>
    <span>Evenement</span>
</div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-6 mb-4">Le BeatFest - Un Festival de Musique Engagé et Innovant</h1>
            <p className="text-md sm:text-lg md:text-xl text-center mb-6">Découvrez un festival de musique rap et de musique urbaine avec des artistes mainstream, engagé dans des pratiques durables et des innovations technologiques pour une expérience unique.</p>
            
            <hr className="my-4 opacity-50" />

            <div className="transition duration-500 ease-in-out text-sm sm:text-base">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">- L&apos;application Mobile</h2>
                <p>Accédez à toutes les fonctionnalités du festival via notre application mobile développée spécialement pour l'événement, minimisant l'usage de ressources matérielles et réduisant notre empreinte carbone.</p><br />
                <ul className="list-disc ml-8">
                    <li>Consulter le programme et les horaires des concerts.</li>
                    <li>Accéder à des informations sur les artistes et les activités en direct.</li>
                    <li>Participer à la tombola et tenter de gagner une voiture.</li>
                    <li>Interagir avec les autres participants et partager vos expériences.</li>
                    <li>Accéder a une carte interactive de l'événement afin de ne pas vous perdre !</li>
                </ul>
            </div>

            <hr className="my-4 opacity-0" />

            <div className="transition duration-500 ease-in-out text-sm sm:text-base">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">- Solutions IoT sur place</h2>
                <p>Tatouages temporaires : A l'entrée du festival des tatouages temporaires QR Codes avec une encre végétale vous serons donnés pour un accès facile et une réduction de l'utilisation des smartphones et ainsi réduire notre impact carbone.</p>
                <p>Gestion intelligente du parking : avec des indicateurs LED pour les places disponibles.</p>
                <p>Systèmes de surveillance biométrique : pour la sécurité des participants.</p>
                <p>Stations de tri des déchets : équipées pour un recyclage efficace et responsable.</p>
                <p>Éclairage intelligent : Utilise des capteurs de luminosité pour ajuster automatiquement l'éclairage en fonction de la lumière naturelle disponible, ce qui permet d'économiser de l'énergie. Ainsi que des détecteurs de mouvements pour activer ou pas les lampadaires sur place.</p>
                <p>Des navettes automatiques électriques : Des navettes électriques serons mises a disposition pour les membres qui auront une place VIP afin de faire des allers retours entre l'hotel partenaire et le lieu de l'évenement.</p>
            </div>

            <hr className="my-4 opacity-0" />

            <div className="transition duration-500 ease-in-out text-sm sm:text-base">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">- Engagement Environnemental</h2>
                <p>En intégrant des pratiques écoresponsables, nous nous engageons à protéger notre environnement et à sensibiliser nos participants à l'importance de la durabilité.</p>
                <p>Un part des bénéfices de l'évenement seront reversés a une association qui lutte pour l'écologie.</p>
            </div>

            <hr className="my-4 opacity-0" />

            <div className="transition duration-500 ease-in-out text-sm sm:text-base pb-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">- Localisation de l'événement</h2>
                <p>L'événement se déroulera à (lieu de l'événement)</p>
                <div className='Carte-evenement'><img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/333043240/original/d220084fe20904d04fbde329b637732bc8da2a0d/do-vector-illustration-of-event-festival-or-any-map-design.jpg" alt="Carte de l'événement"></img></div>
                <p>Du (Date de l'événement) à (Date de la fin de l'événement)</p>
            </div>
            
        </motion.div>
    );
};

export default Evenement;
