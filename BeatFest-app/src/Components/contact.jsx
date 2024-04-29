import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé! Nous vous recontacterons bientôt.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto p-6 bg-gray-800 text-gray-200">
      <h1 className="text-3xl font-bold text-center mb-6">Contactez-nous</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 bg-gray-700 rounded shadow-lg p-6 m-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block text-sm font-bold mb-2">Nom:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded shadow appearance-none text-gray-300 leading-tight focus:outline-none focus:border-gray-400 transition duration-200"
              required
            />

            <label htmlFor="email" className="block text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded shadow appearance-none text-gray-300 leading-tight focus:outline-none focus:border-gray-400 transition duration-200"
              required
            />

            <label htmlFor="message" className="block text-sm font-bold mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-600 rounded shadow appearance-none text-gray-300 leading-tight focus:outline-none focus:border-gray-400 transition duration-200"
              required
            ></textarea>

            <button type="submit" className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 transition duration-300">
              Envoyer
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-6 m-4">
          <h2 className="text-xl font-bold mb-4">Autres moyens de contact:</h2>
          <p>Vous pouvez également nous joindre par:</p>
          <ul className="list-disc pl-5">
            <li>Téléphone: 0612345678</li>
            <li>Email: contact@beatfest.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
