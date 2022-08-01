import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="sm:w-3/6 md:w-7/12 h-screen overflow-y-scroll">
      <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
      <p className="text-xl my-5 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />

    </div>
  );
};

export default ListadoPacientes;
