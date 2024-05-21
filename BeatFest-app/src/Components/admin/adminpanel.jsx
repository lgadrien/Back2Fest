import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FiRefreshCw } from 'react-icons/fi'; // Importation de l'icône de rechargement depuis react-icons

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(); // Appel de la fonction pour récupérer les utilisateurs au chargement du composant
  }, []); // Effectué une seule fois après le premier rendu du composant

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    }
  };

  const handleRefreshUsers = () => {
    fetchUsers(); // Rafraîchit la liste des utilisateurs
  };

  const handleEditUser = (id) => {
    // Ajouter ici la logique pour modifier l'utilisateur
    console.log(`Modifier l'utilisateur avec l'ID : ${id}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="max-w-3xl w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div>
        <button
          onClick={handleRefreshUsers}
          className="flex items-center text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <FiRefreshCw className="mr-1" /> Rafraichir
        </button>
        </div>
        <div className="flex justify-end">
          <p className="text-gray-800 dark:text-gray-100">Nombre de festivaliers : {users.length}</p>
        </div>
        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">Panneau de gestion des festivaliers</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="px-4 py-2 text-gray-800 dark:text-gray-100">ID</th>
                <th className="px-4 py-2 text-gray-800 dark:text-gray-100">Nom</th>
                <th className="px-4 py-2 text-gray-800 dark:text-gray-100">Prénom</th>
                <th className="px-4 py-2 text-gray-800 dark:text-gray-100">Email</th>
                <th className="px-4 py-2 text-gray-800 dark:text-gray-100">Billet</th>
                <th className="px-4 py-2 text-gray-800 dark:text-gray-100">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <motion.tr
                  key={user.id}
                  className="border-b dark:border-gray-600"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{user.id}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{user.nom}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{user.prenom}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{user.email}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-100">{user.billet}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEditUser(user.id)} // Ajout de la fonction pour modifier un utilisateur
                      className="ml-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 w-20"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
                    >
                      Supprimer
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4">
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
