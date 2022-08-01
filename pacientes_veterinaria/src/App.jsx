import Formulario from '../components/Formulario';
import Header from '../components/Header';
import ListadoPacientes from '../components/ListadoPacientes';

const App = () => {
  return (
    <div className="mx-auto container mt-10">
      <Header />
      <div className="w-full mt-16 sm:flex px-10">
        <Formulario/>
        <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App