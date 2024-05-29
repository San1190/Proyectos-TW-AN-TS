import { Component, Input, OnInit, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-titulo',
  template: `
    <h1 class = " bg-gray-900 text-3xl p-2 text-white mx-auto text-center">{{titulo}}</h1>
  `,
  standalone: true,
})
export class TitleComponent {

  @Input({required:true}) titulo!: string;

}
