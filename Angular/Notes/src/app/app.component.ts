import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [RouterOutlet],
  template: '<p>Hola</p>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class MenuComponent {
  title = 'Notes';
}
