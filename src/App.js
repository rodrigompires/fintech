import './App.css';
import { UserContextProvider } from './Context/UserContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import CadastroCartoes from './pages/CadastroCartoes';
import { AnimatePresence } from "framer-motion"
import Usuario from './pages/Usuario';
import SolicitarCartao from './pages/SolicitarCartao';


function App() {

  // const location = useLocation();

  return (
    <UserContextProvider>
      <BrowserRouter>
        <AnimatePresence>
        <>
          <Routes>
            <Route path="/fintech" element={<Home />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/CadastroCartoes/:lastName" element={<CadastroCartoes />} />
            <Route path="/Usuario/:name" element={<Usuario />} />
            <Route path="/SolicitarCartao/:lastName" element={<SolicitarCartao />} />
          </Routes>
        </>
        </AnimatePresence>
      </BrowserRouter>
    </UserContextProvider>

  );
}

export default App;
