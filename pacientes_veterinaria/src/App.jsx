import { useState } from 'react';
import Formulario from '../components/Formulario';
import Header from '../components/Header';
import ListadoPacientes from '../components/ListadoPacientes';

const App = () => {

  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="mx-auto mt-10">
      <Header />
      <div className="w-full mt-16 sm:flex px-10">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}/>
        <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App