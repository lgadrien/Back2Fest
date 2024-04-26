import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.lindependant.fr/api/v1/images/view/64a714eba07b6846034f256b/large/image.jpg?v=1')", height: '90vh' }}>
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-60">  {/* Increased opacity for stronger black filter */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white">Bienvenue au Beat Fest!</h1>
        <p className="text-xl md:text-2xl mb-8 text-center text-white">Rejoignez-nous pour l'expérience musicale ultime!</p>
        <Link to="/billeterie" className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
          Achetez vos billets maintenant
        </Link>
      </div>
    </div>
  );
};

export default Home;
