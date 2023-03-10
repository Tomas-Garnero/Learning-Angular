import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: "<p>Aqui iria un empleado</p>",
  styleUrls: ['./empleado.component.css']
  // styles: ["p {background-color: red}"]
})
export class EmpleadoComponent {
  nombre = "Tomas";
  apellido = "Garnero";
  edad = 25;
  empresa = "Google";
  private antiguedad = 5;

  

  getAntiguedad() {
    return this.antiguedad;
  }
  // modificaEmpresa(value:String) {}

  propertyDisabled = false;
  userRegistrado = false;
  textoDeRegistro = "No hay nadie registrado";

  getRegistroUsuario() {
    this.userRegistrado = false;
  }

  setUsuarioRegistrado(e: Event) {
    // alert("El usuario se registro correctamente");
    // this.textoDeRegistro = "El usuario se Registro correctamente";
    if((<HTMLInputElement>e.target).value == "si") {
      this.textoDeRegistro = "El usuario se Registro correctamente";
    } else {
      this.textoDeRegistro = "No hay nadie registrado";
    }
  }
}
