import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, PokemonSearchComponent]
})
export class AppComponent { }
