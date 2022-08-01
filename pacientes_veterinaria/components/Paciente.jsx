import React from 'react'

const Paciente = () => {
  return (
    <div className="bg-white shadow-md m-3 px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {" "}
          <span className="font-normal normal-case">Pumgcy</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {" "}
          <span className="font-normal normal-case">Miko</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:{" "}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha alta: {" "}
          <span className="font-normal normal-case">
            10 de Diciembre de 2022
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {" "}
          <span className="font-normal normal-case">Hace kk roja</span>
        </p>
      </div>
  )
}

export default Paciente