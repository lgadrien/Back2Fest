import React, { useState, useEffect } from 'react';
import PanierForm from './FormPanier';

const EnvoieBillets = () => {
  return (
    <>
      <style>
        {`
          #root {
            background-color: #1E293B;
          }
        `}
      </style>
      <div className="bg-slate-800 text-white">
        <div className='pb-10'>
          <PanierForm />
        </div>
      </div>
    </>
  );
}

export default EnvoieBillets;
