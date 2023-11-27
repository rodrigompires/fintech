import React from 'react';
import InputLabel from '../components/Forms/InputLabel';
import './Cadastro.css';
import nameIcon from '../assets/images/screen_2/Icone_Nome.svg';
import nameIcon_2 from '../assets/images/screen_2/Icone_Nome.svg';
import emailIcon from '../assets/images/screen_2/Icone_Email.svg';
import passwordIcon from '../assets/images/screen_2/Icone_Senha.svg';
import passwordIcon_2 from '../assets/images/screen_2/Icone_Senha.svg';
import { useGetCities } from '../Hooks/useGetCities.js';
import { useGetState } from '../Hooks/useGetState';
import { Link } from "react-router-dom";
import useForm from '../Hooks/useForm.js';
import AnimatedPage from '../components/AnimatedPage.js';
import Image from '../assets/images/screen_2/Editing body text-pana.svg'




const Cadastro = () => {

    const name = useForm();
    const lastName = useForm();
    const cpf = useForm();
    const phone = useForm();
    const email = useForm();
    const dateNs = useForm();
    const password = useForm();
    const confirmPassword = useForm();


    const [file, setFile] = React.useState(null);
 
    const {states} = useGetState();
    const [selectedState, setSelectedState] = React.useState('');
    const {cities} = useGetCities({uf: selectedState});

    
    const handleUpdateState = (e) => {
        setSelectedState(e.target.value);
    }

 
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }


  return (
    <AnimatedPage>
        <main className='containerRegister'>

            <header className='registerHeader'>
                <div className='titleBox'>
                    <h1>Crie sua conta</h1>
                    <p>preencha seus dados</p>
                </div>
                <div className='chooseBox'>
                    <InputLabel type="file" label="foto" name="upload" id="upload" inputClassName="choosePhoto" labelClassName={file ? "chooseLabel hidden" : "chooseLabel"} onChange={handleFileChange} />
                    {file && <img className='photoUser' src={URL.createObjectURL(file)} alt='foto' />}
                </div>
            </header>

            <section className='sectionContainerRegister'>

                <div className='gridRegister_1'>

                    <form className='inputsBox' id='register' name='register' method='post' >  
                        <div className='inputsBoxLine'>
                            <div className='inputWithIconRegister'>
                                <InputLabel type={"text"} label={"nome"} labelClassName={"defaultLabelRegister"} inputClassName={"defaultInputRegister nameInputRegister"} placeholder={"nome"} {...name}/>
                                <div className="iconWrapperRegister">
                                    <img src={nameIcon} alt="Icon" className='icon'/>
                                </div>
                            </div>
                            <div className='inputWithIconRegister'>
                                <InputLabel type={"text"} label={"sobrenome"} labelClassName={"defaultLabelRegister"} inputClassName={"defaultInputRegister lastNameInputRegister"} placeholder={"sobrenome"} {...lastName}/>
                                <div className="iconWrapperRegister">
                                    <img src={nameIcon_2} alt="Icon" className='icon'/>
                                </div>
                            </div>
                        </div>
                        <div className='errorBoxLine'>
                            <div>
                                {!name.value && <p className='error'>Nome obrigatório</p>}
                            </div>
                            <div>
                                {!lastName.value && <p className='error'>Sobrenome Obrigatório</p>}
                            </div>
                        </div>

                        <div className='inputsBoxLine_1'>
                            <div>
                                <InputLabel type="text" label={"cpf"} labelClassName={"defaultLabelRegister CPFLabel"} inputClassName={"defaultInputRegister CPFInputRegister"} placeholder={"000.000.000-00"} {...cpf}/>
                            </div>

                            <div>
                                <InputLabel type="tel" label={"celular"} labelClassName={"defaultLabelRegister sPhoneLabel"} inputClassName={"defaultInputRegister smartInputRegister"} placeholder={"(11) 99999-9999"} {...phone} />
                            </div>
                            <div>
                                <InputLabel type="tel" label={"outro contato"} labelClassName={"defaultLabelRegister phoneLabel"} inputClassName={"defaultInputRegister phoneInputRegister"} placeholder={"(11) 99999-9999"} />
                            </div>
                        </div>
                        <div className='errorBoxLine_1'>
                            <div>
                                {cpf.error && <p className='error'>{cpf.error}</p>}
                            </div>
                            <div>
                                {phone.error && <p className='error'>{phone.error}</p>}
                            </div>
                        </div>

                        <div className='inputsBoxLine_2'>
                            <div className='inputWithIconRegister'>
                                <InputLabel maxLength={25} type="email" label={"email"} labelClassName={"defaultLabelRegister labelEmail"} inputClassName={"defaultInputRegister emailInputRegister"} placeholder="email@exemplo.com" {...email}/>
                                <div className="iconWrapperRegister">
                                    <img src={emailIcon} alt="Icone Email" className='icon'/>
                                </div>
                            </div>
                            <div>
                                <InputLabel type="date" label={"data nasc"} labelClassName={"defaultLabelRegister"} inputClassName={"defaultInputRegister dateInputRegister"} {...dateNs}/>
                            </div>
                        </div>
                        <div className='errorBoxLine_2'>
                            <div>
                                {email.error && <p className='error'>{email.error}</p>}
                            </div>
                            <div>
                                {dateNs.error && <p className='error'>{dateNs.error}</p>}
                            </div>
                        </div>

                        <div className='inputsBoxLine_3'>
                            <div className='inputWithIconRegister'>
                                <InputLabel maxLength={12} type={"password"} id="password" label={"senha"} labelClassName={"defaultLabelRegister"} inputClassName={"defaultInputRegister passwordInputRegister"} placeholder="Exemplo@*123" {...password}/>
                                <div className="iconWrapperRegister">
                                    <img src={passwordIcon} alt="Icone Senha" className='icon'/>
                                </div>
                            </div>
                            <div className='inputWithIconRegister'>
                                <InputLabel maxLength={12} type={"password"} id="confirme" label={"confirme sua senha"} labelClassName={"defaultLabelRegister"} inputClassName={"defaultInputRegister passwordInputRegister"} placeholder="************" {...confirmPassword}/>
                                <div className="iconWrapperRegister">
                                    <img src={passwordIcon_2} alt="Icone Senha" className='icon'/>
                                </div>
                            </div>
                        </div>
                        <div className='errorBoxLine_3'>
                            <div>
                                {password.error && <p className='error'>{password.error}</p>}
                            </div>
                            <div>
                                {confirmPassword.error && <p className='error'>{confirmPassword.error}</p>}
                            </div>
                        </div>

                    </form>

                    <section className='boxSection'>

                        <div className='inputsBoxLine_4'>

                            <div className='boxState'>
                                <label htmlFor="estado" className='stateLabel'>UF</label>
                                <select className='stateSelect' value={selectedState} onChange={handleUpdateState}>
                                    {states.map((state) => <option value={state.sigla} key={state.id}>{state.sigla}</option>)}
                                </select>
                            </div>


                            <div className='boxCity'>
                                <label htmlFor="cidade" className='cityLabel'>cidade</label>
                                <select className='citySelect'>
                                    {cities.map((city) => <option key={city.codigo_ibge}>{city.nome}</option>)}                  
                                </select>
                            </div>

                        </div>

                    </section>

                    <section className='boxButtons'>
                        <div className='inputsBoxLine_5'>
                            <div>
                                <Link to={"/"}> <InputLabel type="button" value="cancelar" inputClassName="cancelButton" /></Link>
                            </div>
                            <div>
                            {name.value && lastName.value ? <Link to={{pathname: `/CadastroCartoes/${name.value + " " +lastName.value}`}}><InputLabel type="button" value="SALVAR" inputClassName="saveButton" /></Link> : <InputLabel type="button" value="SALVAR" inputClassName="disabled" />}
                            </div>
                        </div>
                    </section>

                </div>

                <div className='imgRegister'>
                    <img src={Image} alt="Imagem note" />
                </div>

            </section>

            <footer className='pageUserFooter'>
                <p style={{color: '#fff'}}><a href="https://br.freepik.com/vetores-gratis/editando-a-ilustracao-do-conceito-do-corpo-do-texto_13549587.htm#query=notebook&position=18&from_view=search&track=sph&uuid=5c91d5ba-ec82-4925-a531-fb64da51a00b">Imagem de storyset</a> no Freepik</p>
            </footer>
        </main>
    </AnimatedPage>
  )
}

export default Cadastro
