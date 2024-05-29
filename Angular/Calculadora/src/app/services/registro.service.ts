import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  operaciones: string[] = [];

  constructor() { }

  // Método para registrar una operación
  registrarOperacion(operacion: string) {
    this.operaciones.push(operacion);
  }

  // Método para obtener todas las operaciones registradas
  obtenerOperaciones(): string[] {
    return this.operaciones;
  }

  // Método para limpiar el registro de operaciones
  limpiarRegistro() {
    this.operaciones = [];
  }
}
