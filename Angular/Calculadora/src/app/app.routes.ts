import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Calculadora/Calculadora.component'),
    children:[
      {
        path: 'registro',
        title: 'Registro',
        loadComponent: () => import('./Registro/Registro.component')
      }
    ]
  }
];
