import React from 'react';
import header from './header.gif';
import bannier from './banniereRD.gif';


function Header() {
  return (
    <header className="header">
      <ul className='nav'>
        <li><a href="/">plan du site |</a></li>
        <li><a href="/">contactez-nous |</a></li>
        <li><a href="/">Ajouter aux favoris</a></li>
      </ul>
      <div className='images'>
        <img id="img1" src={header} alt="" />
        <img id="img2" src={bannier} alt="" />
      </div>
      <div className='acceuil'>
        <a href="/">Accueil</a>
      </div>
    </header>
  )
}





export default Header;
