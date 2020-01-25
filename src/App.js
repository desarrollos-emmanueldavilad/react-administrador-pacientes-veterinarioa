import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/header";
import NuevaCita from "./components/nueva-cita";
import ListaCitas from "./components/listaCitas";
class App extends Component {
  state = {
    citas: []
  };

  //cuando la aplicacion carga
  componentDidMount() {
    const citasLs = localStorage.getItem("citas");
    if (citasLs) {
      this.setState({
        citas: JSON.parse(citasLs)
      });
    }
  }

  //cuando eliminamos o agregamos una nueva cita
  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];
    //agregar nuevo state
    this.setState({
      citas: citas
    });
  };

  //elimina cita del state

  eliminarCita = id => {
    //copiar el state
    const citasActuales = [...this.state.citas];
    //utilizar filter para sacar el elimnot@id
    const citas = citasActuales.filter(cita => cita.id !== id);
    //actualizar state

    this.setState({
      citas: citas
    });
  };
  render() {
    return (
      <div className="container">
        <Header 
        titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />{" "}
          </div>{" "}
          <div className="mt-5 col-md10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
