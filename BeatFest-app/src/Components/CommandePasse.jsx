import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const MotionLink = motion(Link);



const CommandePasse = () => {

    useEffect(() => {
        document.title = 'Beat Fest - Merci';
      }, []);

  return (
    <>
      <style>
        {`
          #root {
            background-color: #1E293B;
          }
        `}
      </style>
      <div className="bg-slate-800 text-white">
        <h2 className='text-2xl font-bold flex justify-center p-10'>Merci pour votre commande !</h2>
        <h2 className='flex justify-center text-2xl p-10 mb-10'>Consultez vos mails pour votre billet, à bientôt !</h2>
        <div className=' flex justify-center p-10'>
            <MotionLink 
                to="/billetterie" 
                className="bg-white text-black font-bold py-2 px-4 rounded shadow"
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)" }}
                whileTap={{ scale: 0.9, boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}
            >
                Retour à l'Accueil
            </MotionLink>
        </div>
      </div>
    </>
  );
}

export default CommandePasse;
