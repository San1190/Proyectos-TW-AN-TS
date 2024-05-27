import { ChangeDetectionStrategy, Component, OnInit, computed, signal } from '@angular/core';

import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  imports: [TitleComponent, CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush, // Cambiar a Default para ver el cambio , el OnPush no detecta cambios en las propiedades
  template:`
    <app-title [title] = "currentFramework()"></app-title>

    <pre>{{frameworkAsSignal() | json }}</pre>
    <pre>{{frameworkAsProperty | json }}</pre>
  
  
  
  `,


})
export default class ChangeDetectionComponent {

  public currentFramework = computed(() => `Change detection - ${this.frameworkAsSignal().name}`);

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };


  constructor(){
    setTimeout(() => {

      //this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      
      }))
      
      console.log("Hecho");
    }, 3000);


  }

}
