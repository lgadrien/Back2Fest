import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler la visibilité du menu sur mobile

  // Variants pour l'animation du menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        duration: 0.5
      }
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transitionEnd: {
        display: "none"
      },
      transition: {
        y: { stiffness: 1000 },
        duration: 0.2
      }
    }
  };

  return (
    <header className="bg-black text-gray-100 p-4 relative flex justify-between items-center">
      <Link to="/" className="text-2xl md:text-3xl font-bold text-white hover:text-gray-300 transition-colors duration-200 z-10">BEAT FEST</Link>
      
      <button className="text-gray-100 md:hidden mr-4 z-30" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
      {/* Utiliser AnimatePresence uniquement pour le mode mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="absolute top-full left-0 w-full bg-black md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="flex flex-col space-y-4 p-4">
              <li><Link to="/evenement" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors duration-200 ease-in-out">L'événement</Link></li>
              <li><Link to="/billeterie" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors duration-200 ease-in-out">Billetterie</Link></li>
              <li><Link to="/artistes" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors duration-200 ease-in-out">Artistes</Link></li>
              <li><Link to="/infos" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors duration-200 ease-in-out">Infos Pratiques</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)} className="text-base hover:text-gray-300 transition-colors duration-200 ease-in-out">Contact</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Toujours visible sur les écrans de bureau */}
      <nav className="hidden md:flex md:items-center md:w-auto">
        <ul className="flex flex-row space-x-4">
          <li><Link to="/evenement" className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">L'événement</Link></li>
          <li><Link to="/billetterie" className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Billetterie</Link></li>
          <li><Link to="/artistes" className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Artistes</Link></li>
          <li><Link to="/infos" className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Infos Pratiques</Link></li>
          <li><Link to="/contact" className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Contact</Link></li>
          <li><Link to="/panier" className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Panier</Link></li>
        </ul>
      </nav>

      <Link to="/panier" className="hidden md:block hover:text-gray-300">
        <img src="../src/assets/Panier.png" alt="Panier" className="w-8 h-8"/>
      </Link>
    </header>
  );
};

export default Header;
