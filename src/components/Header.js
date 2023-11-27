import React from 'react';
import './Header.css';
import LogoFintech from '../assets/images/screen_1/Logo_Fintech.svg';

const Header = () => {
  return (
    <header>
        <img src={LogoFintech} alt="Logo fintech" className='logoFintech' />
        <nav className='navigation'>
          <ul className='list'>
            <li className='listItem'>quem somos</li>
            <li className='listItem'>fale conosco</li>
            <li className='listItem'>valores</li>
          </ul>
        </nav>
    </header>
  )
}

export default Header