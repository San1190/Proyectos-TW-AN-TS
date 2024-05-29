import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/registro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  standalone: true,
  imports:[CommonModule]

})
export default class RegistroComponent implements OnInit {
  operaciones: string[] = [];

  constructor(private registroService: RegistroService) { }

  ngOnInit() {
    // Obtener las operaciones registradas al inicializar el componente
    this.obtenerOperaciones();
  }

  // Método para obtener las operaciones registradas
  obtenerOperaciones() {
    this.operaciones = this.registroService.obtenerOperaciones();
  }

  // Método para limpiar el registro de operaciones
  limpiarRegistro() {
    this.registroService.limpiarRegistro();
    this.obtenerOperaciones(); // Actualiza la lista de operaciones mostrada
  }
}
