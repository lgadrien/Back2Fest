import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler la visibilité du menu sur mobile
  const headerRef = useRef(null); // Référence au header pour accéder à ses dimensions
  const [headerHeight, setHeaderHeight] = useState(0); // État pour stocker la hauteur du header

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  return (
    <header ref={headerRef} className="bg-black text-gray-100 p-4 relative flex justify-between items-center">
      <Link to="/" className="text-2xl md:text-3xl font-bold text-white hover:text-gray-300 transition-colors duration-200 z-10">BEAT FEST</Link>
      
      <button className="text-gray-100 md:hidden mr-4 z-30" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
      <nav className={`absolute md:relative top-full md:top-auto right-0 md:flex md:items-center w-full md:w-auto bg-black md:bg-transparent z-20 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 p-4 md:p-0">
          <li><Link to="/evenement" className="text-base md:text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">L'événement</Link></li>
          <li><Link to="/billeterie" className="text-base md:text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Billetterie</Link></li>
          <li><Link to="/artistes" className="text-base md:text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Artistes</Link></li>
          <li><Link to="/infos" className="text-base md:text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Infos Pratiques</Link></li>
          <li><Link to="/contact" className="text-base md:text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Contact</Link></li>
          <li className="md:hidden"><Link to="/panier" className="text-base md:text-lg hover:text-gray-300 transition-colors duration-200 ease-in-out">Panier</Link></li> {/* Mobile-only link */}
        </ul>
      </nav>

      <Link to="/panier" className="hidden md:block hover:text-gray-300"> {/* Desktop-only link */}
        <img src="../src/assets/Panier.png" alt="Image de panier" className="w-8 h-8"/>
      </Link>
    </header>
  );
};

export default Header;
