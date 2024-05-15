import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler la visibilité du menu sur mobile

  // Variants pour l'animation du menu mobile
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
    <header className="bg-black text-gray-100 py-6 px-4 relative flex items-center justify-center md:py-4 z-50">
      <Link to="/" className="absolute left-4 md:left-0 z-10">
        <img src="../src/assets/HeaderLogoBeatFest.png" alt="Beat Fest Logo" className="h-8 md:h-11 ml-2" />
      </Link>

      <button className="text-gray-100 md:hidden z-30" onClick={() => setIsOpen(!isOpen)} style={{ position: 'absolute', right: '1rem', top: '0.5rem' }}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="absolute top-full left-0 w-full bg-black md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
<<<<<<< Updated upstream
            <ul className="flex flex-col space-y-4 p-4">
              <li><Link to="/evenement" onClick={() => setIsOpen(false)} className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">L'événement</Link></li>
              <li><Link to="/billeterie" onClick={() => setIsOpen(false)} className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Billetterie</Link></li>
=======
            <ul className="flex flex-col space-y-4 p-4" style={{zIndex: -2000}}>
              <li><Link to="/evenement" onClick={() => setIsOpen(false)} className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">L'évènement</Link></li>
              <li><Link to="/billetterie" onClick={() => setIsOpen(false)} className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Billetterie</Link></li>
>>>>>>> Stashed changes
              <li><Link to="/artistes" onClick={() => setIsOpen(false)} className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Artistes</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Contact</Link></li>
              <li><Link to="/panier" onClick={() => setIsOpen(false)} className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Panier</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:items-center md:justify-center md:w-full">
        <ul className="flex flex-row space-x-4 justify-center">
          <li><Link to="/evenement" className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">L'évènement</Link></li>
          <li><Link to="/billetterie" className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Billetterie</Link></li>
          <li><Link to="/artistes" className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Artistes</Link></li>
          <li><Link to="/contact" className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Contact</Link></li>
          <li><Link to="/panier" className="text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Panier</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;