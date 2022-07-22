import Formulario from '../components/Formulario';
import Header from '../components/Header';
import ListadoPacientes from '../components/ListadoPacientes';

const App = () => {
  return (
    <div>
      <Header />
      <Formulario/>
      <ListadoPacientes/>
    </div>
  )
}

export default App