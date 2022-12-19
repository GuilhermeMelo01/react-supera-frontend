import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  //UseState
  const[transferencias, setTransferencias] = useState([]);

  //UseEffect
  useEffect(()=>{
  fetch("http://localhost:8080/api/transferencias")
  .then(retorno => retorno.json())
  .then(retorno_convertido => setTransferencias(retorno_convertido));
  }, []);

  //Retorno
  return (
    <div>
     <Formulario />
     <Tabela vetor={transferencias} />
    </div>
  );
}

export default App;
