import React from 'react';
import './SolicitarCartao.css';
import Card1 from '../assets/images/screen_5/Cartao_1.svg';
import Card2 from '../assets/images/screen_5/Cartao_2.svg';
import LogoFintech from '../assets/images/screen_5/Logo_Fintech.svg';
import { useLocation } from 'react-router-dom';


const SolicitarCartao = () => {

    const location = useLocation();
    const part1 = location.pathname.split('/SolicitarCartao/');
    const userName = part1[1].split("%")[0];


  return (
    <main className='requestCardContainer'>
        <header className='requestCardHeader'>
            <h1>Escolha o seu Cartão</h1>
            <p>cartão de débito e crédito <img src={LogoFintech} alt="" /></p>

        </header>

        <section className='sectionCards'>
            <div className='divCard'>
                <img src={Card1} alt="" />
                <div className='skew'>
                <p className='textSkew'>{userName.toUpperCase()}</p>
                </div>
            </div>
            <div className='divCard2'>
                <img src={Card2} alt="" />
                <div className='skew2'>
                <p className='textSkew2'>{userName.toUpperCase()}</p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default SolicitarCartao