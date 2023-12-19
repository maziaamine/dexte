import React from 'react';

const ResultatList = () => {
  const legumes = ['tomate', 'carotte', 'pomme de terre', 'navet', 'poivron'];

  return (
    <div className='liste'>
      <h1>composant resultat</h1>
      <ul className='legume'>
        {legumes.map((legume, index) => (
          <li key={index}>{legume}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultatList;
