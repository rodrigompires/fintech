import React from 'react';
import './Home.css';
import Header from '../components/Header';
import InputLabel from '../components/Forms/InputLabel';
import nameIcon from '../assets/images/screen_1/Icone_Nome.svg'
import passwordIcon from '../assets/images/screen_1/Icone_Senha.svg'
import useForm from '../Hooks/useForm';
import LogoFintech from '../assets/images/screen_1/Speech to text-pana.svg';
import { Link } from "react-router-dom";
import AnimatedPage from '../components/AnimatedPage';



// import { useData } from '../Context/UserContext';

const Home = () => {

  const name = useForm();
  const password = useForm();




  return (
    <AnimatedPage>
      <main className='mainContainer'>
          <Header />

          <section className='sectionContainer'>

            <div className='grid_1'>
              <h1 className='title'>entre</h1>

              <form className='inputBox' id="user" name="user" method='post'>
                <div className='inputWithIcon'>
                  <InputLabel type={"text"} label={"nome"} placeholder={"nome cadastrado"} inputClassName={"defaultInput"} labelClassName={"defaultLabel"} {...name} />
                  <div className='iconWrapper'>
                    <img src={nameIcon} alt="Icone email" className="icon"/>
                  </div>
                </div>
                  {name.error && <p className='error'>{name.error}</p>}

                  <div className='inputWithIcon'>
                  <InputLabel type={"password"} label={"senha"} placeholder={"digite sua senha"} inputClassName={"defaultInput"} labelClassName={"defaultLabel"} {...password}/>
                  <div className='iconWrapper'>
                    <img src={passwordIcon} alt="Icone email" className="icon"/>
                  </div>
                </div>
                  {password.error && <p className='error'>{password.error}</p>}
                  
              </form>

              <div className='passwordBox'>
                <div className='containerPassword'>
                  <input type="checkbox" name="remember" id="remember" className='rememberInput' />
                  <label htmlFor="remember" className='rememberLabel'>lembrar</label>
                </div>
                <p className='recoverText'>Recuperar senha</p>
              </div>

              <div className='buttonsBox'>
                <div>
                  {!name.value || !password.value ? <InputLabel type={"button"} value={"entrar"} inputClassName={"enterButtonDisabled"} /> : <Link to={{
pathname: `/Usuario/${name.value}`,
    
    }}><InputLabel type={"button"} value={"entrar"} inputClassName={"enterButton"} /></Link>}
                </div>
                <div>
                  <Link to={"/Cadastro"}><InputLabel type={"button"} value={"cadastre-se"} inputClassName={"registerButton"}/></Link>
                </div>
              </div>

              <div className='linksBox'>
                <InputLabel type="button" value="faça login com o Google" inputClassName="googleButton defaultButton" />
                <InputLabel type="button" value="faça login com o Facebook" inputClassName="facebookButton defaultButton" />
                <InputLabel type="button" value="faça login com o Apple" inputClassName="appleButton defaultButton" />
              </div>
            </div>

            <div className='grid_2'>
              <img className='img' src={LogoFintech} alt="" />  
            </div>

          </section>

          <footer className='footerImg'>
            <p><a href="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-discurso-para-texto_11121754.htm#query=smartphone&position=28&from_view=search&track=sph&uuid=8e151c07-a5d0-427d-afaa-075b289847d6">Imagem de storyset</a> no Freepik</p>
          </footer>

      </main>
      </AnimatedPage>
  )
}

export default Home
