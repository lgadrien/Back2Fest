import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Home = () => {
  return (
    <>
      <style>
        {`
          @keyframes gradient-scroll {
            0% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .gradient-scroll {
            background: linear-gradient(to left, 
              #DA70D6,  /* Light Orchid */
              #BA55D3,  /* Medium Orchid */
              #9370DB,  /* Medium Purple */
              #7B68EE,  /* Medium Slate Blue */
              #3CB371,  /* Medium Sea Green */
              #00FA9A,   /* Medium Spring Green */
              #DA70D6,  /* Light Orchid */
              #BA55D3,  /* Medium Orchid */
              #9370DB,  /* Medium Purple */
              #7B68EE,  /* Medium Slate Blue */
              #3CB371,  /* Medium Sea Green */
              #00FA9A   /* Medium Spring Green */
            );
            background-size: 200% 100%;
            animation: gradient-scroll 3s linear infinite;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }
        `}
      </style>
      <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.lindependant.fr/api/v1/images/view/64a714eba07b6846034f256b/large/image.jpg?v=1')", height: '90vh' }}>
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-60">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white">
            Bienvenue au <span className="gradient-scroll">Beat Fest</span>!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center text-white">Rejoignez-nous pour l'expérience musicale ultime!</p>
          <MotionLink to="/billetterie" className="bg-white text-black font-bold py-2 px-4 rounded shadow"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)" }}
            whileTap={{ scale: 0.9, boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)" }}>
              Achetez vos billets maintenant
          </MotionLink>
        </div>
      </div>
    </>
  );
};

export default Home;
