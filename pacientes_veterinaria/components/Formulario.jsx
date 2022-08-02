import {useState, useEffect} from 'react';

const Formulario = () => {
  const [paciente, setPaciente] = useState([]);
  const [error, setError] = useState(false);
  let pacientes = [];
  let patient = {};

  const handleSubmit = e => {
    const form = document.querySelector('form');
    e.preventDefault();

    if([...form.querySelectorAll('.rounded-md')].map(a => a.value).includes('')){
      setError(true);
      return;
    }
    setError(false)
  }

  return (
    <div className="sm:w-2/6 md:w-5/12 pb-10">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center">
          Añade pacientes y
          <span className="text-indigo-600 font-bold"> Adminístralos</span>
        </p>


        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-8 px-5 mt-5">
          <div className="mb-5">
            
            { error && <p>Algunos campos están vacíos</p> }
            
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input 
              type="text" 
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="mascota"
              ////value={}={}
              onChange={ e => patient.mascota = e.target.value}
              />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input 
              type="text" 
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              ////value={}={paciente.propietario}              
              onChange={ e => patient.propietario = e.target.value}
              id="propietario"/>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email Propietario</label>
            <input 
              type="email" 
              placeholder="Email contacto propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              //value={}={paciente.email}
              onChange={ e => patient.email = e.target.value}
              id="email"/>
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input 
              type="date" 
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              //value={}={paciente.alta}
              onChange={ e => patient.alta = e.target.value}
              id="alta"/>
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
            <textarea
              placeholder="Describe los síntomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              //value={}={paciente.sintomas}
              onChange={ e => patient.sintomas = e.target.value}
              id="sintomas"/>
          </div>

          <input 
            type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
            value="Agregar paciente"/>
        </form>
    </div>
  )
}

export default Formulario