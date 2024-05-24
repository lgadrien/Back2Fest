import React, { useState, useEffect } from 'react';



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
    alert('Votre message a été envoyé. Nous vous recontacterons bientôt.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  useEffect(() => {
    document.title = 'Beat Fest - Contact';
  }, []);

  return (
    <>
      <style>
        {`
          #root {
            background-color: #1E293B;
          }
        `}
      </style>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center">
          <div className="w-full max-w-lg bg-white p-6 rounded shadow-lg">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-6">Contactez-nous</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm md:text-base font-semibold text-gray-800">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm md:text-base font-semibold text-gray-800">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm md:text-base font-semibold text-gray-800">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-black"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded hover:scale-110 focus:scale-90 transition-transform duration-300"
                >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
