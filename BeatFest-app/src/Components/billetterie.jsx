import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Billetterie() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  const handleImageClick = (id) => {
    navigate(`/billet/${id}`);
  };

  return (
    <div className='text-black bg-slate-800'>
      <div className='flex space-x-1 pl-10 pt-5 text-white text-2xl'>
          <a href='/' title='Accueil'>Accueil</a><p>/</p>
          <a href='/billetterie' title='Billetterie'>Billetterie</a>
      </div>
        <ul style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '16px',
          listStyle: 'none',
          padding: '10px',
          paddingleft: '30px',
        }}>
          {data.map(item => (
            <li key={item.id} className='p-10'>
              <img 
                src={item.image_path} 
                style={{ width: '100%', transition: 'transform 0.3s' }}
                className="image-hover"
                onClick={() => handleImageClick(item.id)}
              />
            </li>
          ))}
        </ul>
        <style>
          {`
            .image-hover:hover {
              transform: scale(1.05);
            }
          `}
        </style>
    </div>
  );
};

export default Billetterie;
