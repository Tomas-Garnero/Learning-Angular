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
  // empresa = "Aprendiendo Angular";
  private antiguedad = 5;

  getAntiguedad() {
    return this.antiguedad;
  }
  // modificaEmpresa(value:String) {}

  propertyDisabled = false;
  userRegistrado = false;

  getRegistroUsuario() {
    this.userRegistrado = true;
  }
}
