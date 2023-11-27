import React from 'react';
import './Usuario.css';
import { Link, useLocation } from 'react-router-dom';
import InputLabel from '../components/Forms/InputLabel';
import PasswordIconUser from '../assets/images/screen_4/Icone_Senha.svg';
import ExtractIconUser from '../assets/images/screen_4/Icone_Extrato.svg';
import TransferIconUser from '../assets/images/screen_4/Icone_Transferir.svg';
import CardIconUser from '../assets/images/screen_4/Icone_Cartoes.svg';
import RestaurantIconUser from '../assets/images/screen_4/Icone_Restaurantes.svg';
import MarketplaceIconUser from '../assets/images/screen_4/Icone_Mercados.svg';
import AnimatedPage from '../components/AnimatedPage.js';
import LogoFintech from '../assets/images/screen_1/Logo_Fintech.svg';



const Usuario = () => {

    const [file, setFile] = React.useState(null);
    const [look, setLook] = React.useState(false)

    
    const location = useLocation();
    const part1 = location.pathname.split('/Usuario/');
    const userName = part1[1].split("%")[0];
    


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }


    const listItems = [
        {
            title: 'home',
            src: 'images/screen_4/Icone_Home.svg',
            alt: 'Icone Home',
            id: 1,
        },
        {
            title: 'avisos',
            src: 'images/screen_4/Icone_Avisos.svg',
            alt: 'Icone Aviso',
            id: 2
        },
        {
            title: 'finanças',
            src: 'images/screen_4/Icone.Financas.svg',
            alt: 'Icone Finanças',
            id: 3
        },
        {
            title: 'ajuda',
            src: 'images/screen_4/Icone_Ajuda.svg',
            alt: 'Icone Ajuda',
            id: 4
        },
        {
            title: 'mais',
            src: 'images/screen_4/Icone_Menu.svg',
            alt: 'Icone Menu',
            id: 5
        },
    ]

  return (
    <AnimatedPage>
        <main className='userContainer'>

        <header className='userPageHeader'>
            <img src={LogoFintech} alt="Logo Fintech" className='logoFintech' />

            <nav>
                <ul>
                    {listItems.map(({id, src, alt, title}) => <li key={id}><span><img src={src} alt={alt} /></span>{title}</li> )}                   
                </ul>
            </nav>
        </header>


            <section className='userSection'>
                <div className='identificationUser'>
                    <h1>Olá, {userName.toUpperCase()}</h1>
                    <p>Ag: 0000 | C/C 10000-0</p>
                </div>
                <div className='chooseBox'>
                    <InputLabel type="file" label="foto" name="upload" id="upload" inputClassName="choosePhoto" labelClassName={file ? "chooseLabel hidden" : "chooseLabel"} onChange={handleFileChange} />
                    {file && <img className='photoUser' src={URL.createObjectURL(file)} alt='foto' />}
                </div>
            </section>

            <section className='userSectionValue'>
                <div className='userValue'>
                {!look ? <p>R$ 50.000,00</p> : <p>************</p>}
                    <img src={PasswordIconUser} alt="Icone Senha" onClick={() => setLook(!look)} style={{cursor: 'pointer'}} />
                </div>
                <p className='userTextBalance'>Seu saldo</p>
            </section>

            <section className='boxWidgets'>
                <div className='gridWidgetsLine_1'>
                    <div className='widgetDefaultLine_1'>
                        <img src={ExtractIconUser} alt="" />
                        <p>Extrato</p>
                    </div>
                    <div className='widgetDefaultLine_1'>
                        <img src={TransferIconUser} alt="" />
                        <p>Transferir</p>
                    </div>
                    <Link to={{pathname: `/SolicitarCartao/${userName}`}}><div className='widgetDefaultLine_1 cards'>
                        <img src={CardIconUser} alt="" />
                        <p>Cartões</p>
                    </div></Link>
                </div>
                <div className='gridWidgetsLine_2'>
                    <div className='widgetDefaultLine_2'>
                        <img src={RestaurantIconUser} alt="" />
                        <p>Buscar Restaurantes</p>
                    </div>
                    <div className='widgetDefaultLine_2'>
                        <img src={MarketplaceIconUser} alt="" />
                        <p>Buscar Mercados</p>
                    </div>
                </div>
            </section>

            <footer className='userFooter'>
                <nav>
                    <ul>
                        {listItems.map(({id, src, alt, title}) => <li key={id}><span><img src={src} alt={alt} /></span>{title}</li> )}
                    </ul>
                </nav>
            </footer>
        
        </main>
    </AnimatedPage>
  )
}

export default Usuario
