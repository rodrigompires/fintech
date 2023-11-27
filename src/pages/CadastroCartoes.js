import React from 'react'
import AnimatedPage from '../components/AnimatedPage.js';
import './CadastroCartoes.css';
import InputLabel from '../components/Forms/InputLabel';
import CardLogo from '../assets/images/screen_3/Logo_Cartao_1.svg';
import IconCard from '../assets/images/screen_3/Icone_Cartao_1.svg';
import CardLogo2 from '../assets/images/screen_3/Logo_Cartao_2.svg';
import IconCard2 from '../assets/images/screen_3/Icone_Cartao_2.svg';
import { useLocation } from 'react-router-dom';
// import useForm from '../Hooks/useForm.js';





const CadastroCartoes = () => {

  const [file, setFile] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [inputValue2, setInputValue2] = React.useState('');

  const location = useLocation();
  const fisrtLastNameUser = location.pathname.split('/CadastroCartoes/')[1].split(/%20/g).join(" ");

  const handleChange = (e) => {
    if (e.key === "Backspace") {
      let newValue = e.target.value.substring(0, e.target.value.length - 1);
      setInputValue(newValue);
      return;
    }

    let valueLength = e.target.value.length;
    if (valueLength === 4 || valueLength === 9 || valueLength === 14) {
      e.target.value += '.'
    }
    setInputValue(e.target.value);
  };

  const handleChange2 = (e) => {
    if (e.key === "Backspace") {
      let newValue2 = e.target.value.substring(0, e.target.value.length - 1);
      setInputValue2(newValue2);
      return;
    }

    let valueLength = e.target.value.length;
    if (valueLength === 4 || valueLength === 9 || valueLength === 14) {
      e.target.value += '.'
    }
    setInputValue2(e.target.value);
  };


  const handleFileChange = (e) => {
    setFile(e.target.files[0])
}


  return (
    <AnimatedPage>
      <main className='containerRegister_2'>
        <header className='registerHeader_2'>
            <div className='titleBox_2'>
                <h1>Crie sua conta</h1>
                <p>insira o numero de seus cartões</p>
            </div>
            <div className='chooseBox'>
                <InputLabel type="file" label="foto" name="upload" id="upload" inputClassName="choosePhoto" labelClassName={file ? "chooseLabel hidden" : "chooseLabel"} onChange={handleFileChange} />
                {file && <img className='photoUser' src={URL.createObjectURL(file)} alt='foto' />}
            </div>
        </header>

        <div className='gridRegister_2_1'>

          <form className='inputsBox_2'>
            <div className='inputsBoxLine_2_1'>
              <div>
                  <InputLabel type="text" label={"numero"} minLenght={0} maxLength={19} labelClassName={"defaultLabelRegister"} inputClassName={"defaultInputRegister"} placeholder={"0000.0000.0000.0000"}  onKeyDown={handleChange}/>
              </div>

              <div>
                  <InputLabel type="text" maxLength={5} label={"validade"} labelClassName={"defaultLabelRegister"} inputClassName={"defaultInputRegister"} placeholder={"01/99"} />
              </div>
              <div>
                  <InputLabel type="text" label={'cvv'} maxLength={3} labelClassName={"defaultLabelRegister"} inputClassName={"defaultInputRegister"} placeholder={"000"} />
              </div>
            </div>
          </form>

          
            <div className={inputValue.length >= 4 ? 'registerCard visible' : 'registerCard'}>
              <div className='cardLogo'>
                <img src={CardLogo} alt="" />
              </div>
              <div className='iconCard'>
                <img src={IconCard} alt="" />
              </div>
              <div>
                <span className='nameClient'>{fisrtLastNameUser.toUpperCase()}</span>
              </div>
              <div>
                <span className='numberCardValue'>{inputValue}</span>
              </div>
            </div>


            <form className='inputsBox_2'>
              <div className='inputsBoxLine_2_1'>
                <div>
                    <InputLabel type="text" label={"numero"} minLenght={0} maxLength={19} labelClassName={"defaultLabelRegister"} inputClassName={"defaultInputRegister"} placeholder={"0000.0000.0000.0000"}  onKeyDown={handleChange2}/>
                </div>

                <div>
                    <InputLabel type="text" maxLength={5} label={"validade"} labelClassName={"defaultLabelRegister"} inputClassName={"defaultInputRegister"} placeholder={"01/99"} />
                </div>
                <div>
                    <InputLabel type="text" label={'cvv'} maxLength={3} labelClassName={"defaultLabelRegister"} inputClassName={"defaultInputRegister"} placeholder={"000"} />
                </div>
              </div>
            </form>

            <div className={inputValue2.length >= 4 ? 'registerCard2 visible' : 'registerCard2'}>
              <div className='cardLogo2'>
                <img src={CardLogo2} alt="" />
              </div>
              <div className='iconCard2'>
                <img src={IconCard2} alt="" />
              </div>
              <div>
                <span className='nameClient2'>{fisrtLastNameUser.toUpperCase()}</span>
              </div>
              <div>
                <span className='numberCardValue2'>{inputValue2}</span>
              </div>
            </div>


            
            
        </div>


      </main>
    </AnimatedPage>
  )
}

export default CadastroCartoes