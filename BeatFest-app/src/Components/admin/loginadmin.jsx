import React from 'react';

const LoginAdmin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de connexion
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Admin Panel</h1>
          <p className="text-gray-500 dark:text-gray-400">Connectez-vous pour accéder au panneau</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="w-full px-3 py-2 mt-1 text-gray-900 dark:text-gray-100 placeholder-gray-500 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mot de passe</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full px-3 py-2 mt-1 text-gray-900 dark:text-gray-100 placeholder-gray-500 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 dark:bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
