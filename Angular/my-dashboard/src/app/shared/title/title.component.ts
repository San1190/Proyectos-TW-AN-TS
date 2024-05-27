import { Component, Input, OnInit, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1 class = "text-3xl mb-5">{{title}}- {{withShadow}}</h1>
  `,
  standalone: true,
})
export class TitleComponent {

  @Input({required:true}) title!: string;
  @Input({transform: booleanAttribute}) withShadow: boolean = false; 


}
