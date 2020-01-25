import React from "react";
import Cita from "./cita";
const ListaCitas = ({ citas, eliminarCita }) => {
//Imprimer un mensaje en base a si hay o no citas

const mensaje = Object.keys(citas).length === 0 ? "No hay citas" : "Administra las citas aquí"

    return(
        <div className="card mt-2 py-5">
          <div className="card-body">
            <h2 className="card-title text-center">{mensaje}</h2>
          </div>
      
          <div className="Lista-citas">
            {citas.map(cita => (
              <Cita key={citas.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      );
}



export default ListaCitas;
