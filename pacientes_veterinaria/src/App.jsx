import Formulario from '../components/Formulario';
import Header from '../components/Header';
import ListadoPacientes from '../components/ListadoPacientes';

const App = () => {
  return (
    <div className="mt-10 mx-auto">
      <Header />
      <Formulario/>
      <ListadoPacientes/>
    </div>
  )
}

export default App