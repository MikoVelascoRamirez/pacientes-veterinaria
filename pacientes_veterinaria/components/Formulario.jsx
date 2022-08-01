
const Formulario = () => {
  return (
    <div className="sm:w-2/6 md:w-5/12">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center">
          Añade pacientes y
          <span className="text-indigo-600 font-bold"> Adminístralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-8 px-5 mt-5">
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input 
              type="text" 
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="mascota"/>
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input 
              type="text" 
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="propietario"/>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email Propietario</label>
            <input 
              type="email" 
              placeholder="Email contacto propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="email"/>
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input 
              type="date" 
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="alta"/>
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
            <textarea
              placeholder="Describe los síntomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
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