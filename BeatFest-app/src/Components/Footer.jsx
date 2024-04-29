import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h5 className="text-lg font-bold">BEAT FEST</h5>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <Link to="/mentions-legales" className="hover:text-gray-300">Mentions légales</Link>
          <Link to="/politique-de-confidentialite" className="hover:text-gray-300">Politique de confidentialité</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-200">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png" alt="Facebook" className="w-8 h-8"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-200">
            <img src="https://img.freepik.com/vecteurs-libre/nouveau-logo-twitter-2023-x-fond-blanc-vecteur_1017-45422.jpg?w=740&t=st=1714085029~exp=1714085629~hmac=7673c14411190b125e3db6ec077eff7382fb6d43eb018a19df6ce57d172d42a7" alt="Twitter" className="w-8 h-8"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-200">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/800px-Instagram_logo.png" alt="Instagram" className="w-8 h-8"/>
          </a>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Beat Fest. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
